import CameraListTable from '@/components/CameraList/table/CameraListTable'
import CameraAddPaper from '@/components/CameraList/carmera-add-paper/CameraAddPaper'
import { Box } from '@material-ui/core'
import React, { useState } from 'react'
import useStyles from './styles'
export type CameraDataType = {
  image: string
  name: string
  mac: string
  location: string
  date: string
}

const dataList: CameraDataType[] = [
  {
    image: 'cctv1.jpg',
    name: '메인 카메라',
    mac: 'AA-BB-CC-DD',
    location: '주차장 입구',
    date: '2021-01-01',
  },
  {
    image: 'cctv2.jpg',
    name: '서브 카메라1',
    mac: 'AA-BB-CC-EE',
    location: '지하 1층',
    date: '2021-01-01',
  },
  {
    image: 'cctv3.jpg',
    name: '서브 카메라2',
    mac: 'AA-BB-CC-FF',
    location: '지하 2층',
    date: '2021-01-01',
  },
]

export default function CameraList() {
  const classes = useStyles()
  const [cameraList, setCameraList] = useState<CameraDataType[]>(dataList)

  const onCreateCamera = (data: CameraDataType) => {
    setCameraList(cameraList.concat(data))
  }
  return (
    <Box className={classes.root}>
      <CameraAddPaper onCreate={onCreateCamera} />
      <CameraListTable cameraList={cameraList} />
    </Box>
  )
}
