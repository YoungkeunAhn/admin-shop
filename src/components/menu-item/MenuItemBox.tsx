import { SideMenuType } from "@/types/side-menu"
import {
  Box,
  ButtonBase,
  Collapse,
  IconButton,
  ListItem,
  Typography,
  Icon,
} from "@material-ui/core"
import ExpandLessIcon from "@material-ui/icons/ExpandLess"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import React from "react"
import useStyles from "./styles"

type Props = {
  menu: SideMenuType
  expand: boolean
}

export default function MenuItemBox(props: Props) {
  const { menu, expand } = props
  const { subMenu, icon } = menu
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <ListItem>
        <Box className={classes.titleBox}>
          <Box display='flex'>
            <Icon className={classes.titleIcon}>{icon}</Icon>
            <Typography variant='body1'>{menu.title}</Typography>
          </Box>
          <IconButton>
            {subMenu ? expand ? <ExpandMoreIcon /> : <ExpandLessIcon /> : null}
          </IconButton>
        </Box>

        {subMenu ? (
          <Collapse in={expand} className={classes.subMenuBox}>
            <Box display='flex' flexDirection='column'>
              {subMenu.map((sub, idx) => (
                <ButtonBase key={idx} className={classes.itemButton}>
                  <Typography variant='body2'>{sub}</Typography>
                </ButtonBase>
              ))}
            </Box>
          </Collapse>
        ) : null}
      </ListItem>
    </div>
  )
}
