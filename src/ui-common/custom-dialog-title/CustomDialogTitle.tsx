import { Dialog, DialogTitle } from '@material-ui/core'
import React from 'react'

type Props = {
  title: string
}

export default function CustomDialogTitle(props: Props) {
  const { title } = props
  return <DialogTitle>{title}</DialogTitle>
}
