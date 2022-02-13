import { Box, Paper, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'
type Props = {
  title: string
  children: React.ReactNode
}
export default function StyledInfoPaper(props: Props) {
  const classes = useStyles()
  const { title, children } = props

  return (
    <Paper className={classes.root} elevation={0}>
      <Typography variant="h6">{title}</Typography>
      <Box className={classes.content}>{children}</Box>
    </Paper>
  )
}
