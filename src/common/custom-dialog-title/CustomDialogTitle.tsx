import { Box, DialogTitle, IconButton, Typography } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import React from 'react'
import useStyles from './styles'

type Props = {
  title: string
  onClose: () => void
}

export default function CustomDialogTitle(props: Props) {
  const { title, onClose } = props
  const classes = useStyles()

  return (
    <DialogTitle className={classes.root}>
      <Box className={classes.titleBox}>
        <Typography variant='body1'>{title}</Typography>

        <IconButton onClick={onClose} className={classes.closeIcon}>
          <CloseIcon />
        </IconButton>
      </Box>
    </DialogTitle>
  )
}
