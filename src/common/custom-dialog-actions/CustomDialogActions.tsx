import { DialogActions } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'

type Props = {
  children: React.ReactNode
}

export default function CustomDialogActions(props: Props) {
  const { children } = props
  const classes = useStyles()

  return <DialogActions className={classes.root}>{children}</DialogActions>
}
