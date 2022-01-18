import { Box, IconButton, Typography } from "@material-ui/core";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import React from "react";
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
    </Box>
  );
}

export default SideMenuBar;
