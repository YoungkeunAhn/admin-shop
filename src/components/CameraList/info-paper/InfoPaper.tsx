import { Paper, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'

type Props = {
  title: string
  children: React.ReactChild
}

export default function InfoPaper(props: Props) {
  const { title, children } = props
  const classes = useStyles()

  return (
    <Paper className={classes.paper}>
      <Typography variant="h6">{title}</Typography>
      {children}
    </Paper>
  )
}
