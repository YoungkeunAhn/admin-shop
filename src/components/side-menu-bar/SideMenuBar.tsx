import { sideMenu } from "@/types/side-menu";
import { Box, IconButton, Typography } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import React from "react";
import MenuItemBox from "../menu-item/MenuItemBox";
import useStyles from "./styles";

function SideMenuBar() {
  const classes = useStyles();

  return (
    <Box className={classes.sideBar}>
      <Box className={classes.sideBarHeader}>
        <Typography variant="h5">INCAPPAY</Typography>
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
      </Box>

      {sideMenu.map((menu, idx) => (
        <MenuItemBox key={idx} menu={menu} expand={true} />
      ))}
    </Box>
  );
}

export default SideMenuBar;
