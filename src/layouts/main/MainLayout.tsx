import { Box, Icon, Typography } from '@material-ui/core'
import React from 'react'
import SideMenuBar from './side-bar/SideMenuBar'
import useStyles from './styles'

function MainLayout() {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <SideMenuBar />
      <Box className='main'>
        <Icon>add_circle</Icon>
        <Typography variant='srOnly'>Create a user</Typography>
      </Box>
    </Box>
  )
}

export default MainLayout
