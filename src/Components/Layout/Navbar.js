import React from "react";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import CONSTANTS from "../../Constants/Constants";

import styles from "./Home.module.css";

const Navbar = () => {
  return (
    <AppBar position={CONSTANTS.UI.NAVBAR_POSITION} className={styles.navBar}>
      <Toolbar>
        <IconButton
          edge={CONSTANTS.UI.ICON_BUTTON_EDGE}
          color={CONSTANTS.UI.ICON_BUTTON_COLOR}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant={CONSTANTS.UI.TYPEPOGRAPHY_H6}>
          {CONSTANTS.NAMES.ORGANIZATION}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
