import { Paper } from '@material-ui/core'
import clsx from 'clsx'
import React from 'react'
import useStyles from './styles'
type Props = {
  children: React.ReactChild
  className?: React.CSSProperties
}

export default function StyledOptionPaper(props: Props) {
  const { children, className } = props
  const classes = useStyles()
  return (
    <Paper className={clsx(classes.root, className)} elevation={0}>
      {children}
    </Paper>
  )
}