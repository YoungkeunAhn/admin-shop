import { SideMenuType } from '@/types/side-menu'
import {
  Box,
  ButtonBase,
  Collapse,
  IconButton,
  ListItem,
  Typography,
  Icon,
} from '@material-ui/core'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import React, { useEffect, useState } from 'react'
import useStyles from './styles'

type Props = {
  menu: SideMenuType
  expand: boolean
  drawerOpen: boolean
  onClickMenu: (url: string) => void
}

export default function MenuItemBox(props: Props) {
  const { menu, expand, drawerOpen, onClickMenu } = props
  const { subMenu, icon } = menu
  const classes = useStyles()

  const [menuExpand, setMenuExpand] = useState<boolean>(expand)

  useEffect(() => {
    if (!drawerOpen) setMenuExpand(false)
  }, [drawerOpen])

  return (
    <div className={classes.root}>
      <ListItem>
        <Box className={classes.titleBox}>
          <Box display='flex'>
            <Icon className={classes.titleIcon}>{icon}</Icon>
            <Typography variant='body1'>{menu.title}</Typography>
          </Box>

          {subMenu ? (
            menuExpand ? (
              <IconButton size='small'>
                <ExpandMoreIcon fontSize='small' />
              </IconButton>
            ) : (
              <IconButton size='small'>
                <ExpandLessIcon fontSize='small' />
              </IconButton>
            )
          ) : null}
        </Box>

        {subMenu ? (
          <Collapse in={menuExpand} className={classes.subMenuBox}>
            <Box
              className={classes.subMenuBox}
              display='flex'
              flexDirection='column'
            >
              {subMenu.map((sub, idx) => (
                <ButtonBase
                  key={idx}
                  className={classes.itemButton}
                  onClick={() => onClickMenu(sub.url)}
                >
                  <Typography variant='body2'>{sub.label}</Typography>
                </ButtonBase>
              ))}
            </Box>
          </Collapse>
        ) : null}
      </ListItem>
    </div>
  )
}
