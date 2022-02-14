import InfoPaper from '@/components/CameraList/info-paper/InfoPaper'
import { Box, Paper, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'

export default function CameraList() {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <InfoPaper title="카메라 등록">
        <Box></Box>
      </InfoPaper>
    </Box>
  )
}
