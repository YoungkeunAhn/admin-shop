import { Box } from '@material-ui/core'
import React from 'react'
import SideMenuBar from './side-bar/SideMenuBar'
import useStyles from './styles'
import TopMenu from './top-menu'

type Props = {
  children: React.ReactChild
  title: string
}

function MainLayout(props: Props) {
  const { children, title } = props
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <SideMenuBar />

      <main className={classes.main}>
        <TopMenu title={title} />
        <Box p={1}>{children}</Box>
      </main>
    </Box>
  )
}

export default MainLayout
