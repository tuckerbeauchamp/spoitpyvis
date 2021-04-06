from flask import Flask, request, redirect, session
from flask_cors import CORS
from flask_session import Session
from urllib.parse import urlencode
import spotipy
import spotipy.util as util
from spotipy.oauth2 import SpotifyOAuth
import requests
import base64
import six
import time
import pandas as pd
import json

with open("creds.json") as f:
    creds = json.load(f)

client_id = creds.get("client_id")
client_secret = creds.get("client_secret")

redirect_uri = "http://127.0.0.1:5000/auth"


scopes = ["user-library-read", "user-top-read"]

provider_url = "https://accounts.spotify.com/authorize"

params = urlencode(
    {
        "client_id": client_id,
        "scope": "user-library-read user-top-read",
        "redirect_uri": redirect_uri,
        "response_type": "code",
        "show_dialog": True,
    }
)

url = provider_url + "?" + params


app = Flask(__name__)
# app.secret_key = "anything"
# Check Configuration section for more details
SESSION_TYPE = "filesystem"
app.config.from_object(__name__)
Session(app)  # CORS(app)


@app.route("/")
def hello():
    return url


@app.route("/login")
def login():
    return redirect(url)


@app.route("/profile/<token>")
def me(token):
    sp = spotipy.Spotify(auth=token)
    return {"profile": sp.me()}


@app.route("/tracks/<token>")
def tracks(token):
    sp = spotipy.Spotify(auth=token)
    results = sp.current_user_saved_tracks()
    print("results", results)
    return {"artists": results["items"]}


@app.route("/artists/audio_features/<artist>/<token>")
def artist_analysis(artist, token):
    sp = spotipy.Spotify(auth=token)
    album_ids = list(
        map(
            lambda x: x.get("id"),
            sp.artist_albums(artist, album_type="single").get("items"),
        )
    )
    tracks = [
        list(map(lambda x: x.get("id"), sp.album_tracks(album_id).get("items")))
        for album_id in album_ids
    ]
    tracks = [item for sublist in tracks for item in sublist]

    audio_features = sp.audio_features(tracks[:100])
    afdf = pd.DataFrame(audio_features)

    return {
        "danceability": afdf.danceability.mean(),
        "energy": afdf.energy.mean(),
        "loudness": afdf.loudness.mean(),
        "speechiness": afdf.speechiness.mean(),
        "acousticness": afdf.acousticness.mean(),
        "instrumentalness": afdf.instrumentalness.mean(),
        "liveness": afdf.liveness.mean(),
        "valence": afdf.valence.mean(),
        "tempo": afdf.tempo.mean(),
        "top_keys": afdf.key.value_counts()[:3].tolist(),
    }


@app.route("/artists/<time_range>/<token>")
def artists(time_range, token):
    print("Returning artists...")
    print("token", token)
    sp = spotipy.Spotify(auth=token)
    results = sp.current_user_top_artists(limit=20, time_range=time_range)
    print("results", results)
    return {"artists": results["items"]}


@app.route("/auth", methods=["GET", "POST"])
def auth():
    print("exchanging token...")
    access_code = request.args.get("code")
    if access_code:
        auth_header = base64.b64encode(
            six.text_type(client_id + ":" + client_secret).encode("ascii")
        )
        headers = {"Authorization": "Basic %s" % auth_header.decode("ascii")}
        payload = {
            "code": access_code,
            "grant_type": "authorization_code",
            "redirect_uri": redirect_uri,
        }
        resp = requests.post(
            f"https://accounts.spotify.com/api/token", data=payload, headers=headers
        ).json()
        token = resp["access_token"]
        # sp = spotipy.Spotify(auth=token)
        # results = sp.current_user_top_artists(limit=50)
        # print(results)
        # return results
    return redirect(f"http://localhost:3000/dashboard/?token={token}", 302)
