import { Box, Paper, Typography } from '@material-ui/core'
import clsx from 'clsx'
import React from 'react'
import useStyles from './styles'
type Props = {
  title: string
  children: React.ReactNode
  fullWidth?: true
}
export default function StyledInfoPaper(props: Props) {
  const classes = useStyles()
  const { title, children, fullWidth } = props

  return (
    <Paper
      className={clsx(classes.root, fullWidth && classes.fullWidth)}
      elevation={0}
    >
      <Typography variant="h6">{title}</Typography>
      <Box>{children}</Box>
    </Paper>
  )
}
