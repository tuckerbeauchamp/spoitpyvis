import { UPDATE_TOKEN } from "./actions";

export const userReducer = (state, action) => {
  switch (action.type) {
    case UPDATE_TOKEN:
      return { ...state, token: action.payload };
    default:
      throw new Error(`Invalid action type: ${action.type}`);
  }
};

export const userState = {
  name: "",
  token: null
}
