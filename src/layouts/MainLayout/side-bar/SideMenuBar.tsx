import { sideMenu } from '@/types/side-menu'
import { Box, Drawer, Hidden, IconButton, Typography } from '@material-ui/core'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import clsx from 'clsx'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import MenuItemBox from './menu-item/MenuItemBox'

import useStyles from './styles'

function SideMenuBar() {
  const [open, setOpen] = useState<boolean>(true)
  const classes = useStyles(open)
  const router = useRouter()

  const handleDrawer = () => {
    setOpen(!open)
    console.log(open)
  }

  const onClickMenu = (url: string) => {
    router.push(url)
  }

  return (
    <Drawer
      anchor='left'
      variant='permanent'
      className={clsx(
        classes.drawer,
        open ? classes.drawerOpen : classes.drawerClose
      )}
      onClose={handleDrawer}
    >
      <Box className={classes.sideBar}>
        <Box className={classes.sideBarHeader}>
          {open && <Typography variant='h5'>INCARPAY</Typography>}

          <IconButton onClick={handleDrawer}>
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </Box>

        {sideMenu.map((menu, idx) => (
          <MenuItemBox
            key={idx}
            menu={menu}
            expand={true}
            drawerOpen={open}
            onClickMenu={onClickMenu}
          />
        ))}
      </Box>
    </Drawer>
  )
}

export default SideMenuBar
