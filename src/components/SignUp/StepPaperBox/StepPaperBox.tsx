import { Box, Paper, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'
type Props = {
  title: string
  children: React.ReactChild
}
export default function StepPaperBox(props: Props) {
  const classes = useStyles()
  const { title, children } = props

  return (
    <Paper className={classes.root} elevation={0}>
      <Typography variant='h6'>{title}</Typography>
      <Box className={classes.content}>{children}</Box>
    </Paper>
  )
}
