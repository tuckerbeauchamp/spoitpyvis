import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { views } from "views";
import { Menu, Segment } from "semantic-ui-react";

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
        {views.map(({ path, name }) => (
          <Menu.Item
            name={name}
            path={path}
            active={activeItem === "home"}
            onClick={handleItemClick}
          />
        ))}

        <Menu.Menu position="right">
          <Menu.Item
            name="logout"
            active={activeItem === "logout"}
            onClick={handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    </nav>
  );
}

export default Navbar;
