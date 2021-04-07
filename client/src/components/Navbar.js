import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Menu } from "semantic-ui-react";

function Navbar() {
  const history = useHistory();

  const [activeItem, setActiveItem] = useState("home");

  const handleItemClick = (e, { path }) => {
    setActiveItem(path);
    history.push(path);
  };

  return (
    <nav>
      <Menu pointing secondary>
        <Menu.Item
          name="Home"
          path="/"
          active={activeItem === "/"}
          onClick={handleItemClick}
        />
        <Menu.Item
          name="Dashboard"
          path="/dashboard"
          active={activeItem === "/dashboard"}
          onClick={handleItemClick}
        />

        <Menu.Menu position="right">
          <Menu.Item
            name="Sign In"
            path="/sign-in"
            active={activeItem === "/sign-in"}
            onClick={handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    </nav>
  );
}

export default Navbar;
