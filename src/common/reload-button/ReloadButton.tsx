import { IconButton } from '@material-ui/core'
import RotateLeftIcon from '@material-ui/icons/RotateLeft'
import { useRouter } from 'next/router'
import React from 'react'
import useStyles from './styles'

export default function ReloadButton() {
  const router = useRouter()
  const classes = useStyles()

  const onReload = () => {
    router.reload()
  }

  return (
    <IconButton className={classes.root} onClick={onReload}>
      <RotateLeftIcon fontSize='small' />
    </IconButton>
  )
}
