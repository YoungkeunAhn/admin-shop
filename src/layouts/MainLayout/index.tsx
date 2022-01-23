import { Box } from '@material-ui/core'
import React from 'react'
import SideMenuBar from './side-bar/SideMenuBar'
import useStyles from './styles'

type Props = {
  children: React.ReactChild
}

function MainLayout(props: Props) {
  const { children } = props
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <SideMenuBar />

      <main>{children}</main>
    </Box>
  )
}

export default MainLayout
