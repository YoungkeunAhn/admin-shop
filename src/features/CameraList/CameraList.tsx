import CameraListTable from '@/components/CameraList/camera-list-table/CameraListTable'
import CameraAddPaper from '@/components/CameraList/carmera-add-paper/CameraAddPaper'
import { Box } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'

export default function CameraList() {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <CameraAddPaper />
      <CameraListTable />
    </Box>
  )
}
