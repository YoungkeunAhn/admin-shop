import { Box, Button, Paper, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import DataInputLine from './data-input-line/DataInputLine'
import useStyles from './styles'

type InputsType = {
  cameraName: string
  mac: string
  location: string
}

const initialInputs: InputsType = {
  cameraName: '',
  mac: '',
  location: '',
}

export default function CameraAddPaper() {
  const classes = useStyles()
  const [cameraInputs, setCameraInputs] = useState<InputsType>(initialInputs)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCameraInputs({
      ...cameraInputs,
      [event.target.name]: event.target.value,
    })
  }

  return (
    <Paper className={classes.root}>
      <Typography variant="h6" className={classes.title}>
        카메라 등록
      </Typography>
      <Box className={classes.infoBox}>
        <DataInputLine
          title="카메라 이름"
          name="cameraName"
          value={cameraInputs.cameraName}
          onChange={onChange}
          placeholder="카메라 이름 입력"
        />
        <DataInputLine
          title="MAC 주소"
          name="mac"
          value={cameraInputs.mac}
          onChange={onChange}
          placeholder="MAC 주소 입력"
        />
        <DataInputLine
          title="카메라 위치"
          name="location"
          value={cameraInputs.location}
          onChange={onChange}
          placeholder="카메라 사용위치 입력"
        />
      </Box>
      <Button variant="contained" color="primary" className={classes.addBtn}>
        추가하기
      </Button>
    </Paper>
  )
}
