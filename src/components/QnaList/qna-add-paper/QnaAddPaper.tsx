import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography,
} from '@material-ui/core'
import React, { useState } from 'react'
import useStyles from './styles'

type InputsType = {
  title: string
  type: number
  content: string
}

const initialInputs = {
  title: '',
  type: 0,
  content: '',
}
export default function QnaAddPaper() {
  const classes = useStyles()
  const [inputs, setInputs] = useState<InputsType>(initialInputs)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value })
  }

  const onChangeType = (event: React.ChangeEvent<{ value: unknown }>) => {
    setInputs({ ...inputs, type: event.target.value as number })
  }

  return (
    <Paper>
      <Box className={classes.root}>
        <Typography variant="h6" className={classes.title}>
          문의 등록
        </Typography>
        <Box className={classes.inputsBox}>
          <Box className={classes.inputLine}>
            <Typography variant="body1">문의 제목</Typography>
            <TextField
              variant="outlined"
              size="small"
              name="title"
              value={inputs.title}
              onChange={onChange}
              placeholder="제목 입력"
              fullWidth
            />
          </Box>

          <Box className={classes.inputLine}>
            <Typography variant="body1">분류</Typography>
            <FormControl variant="outlined" size="small" fullWidth>
              <Select value={inputs.type} onChange={onChangeType}>
                <MenuItem value={0}>선택</MenuItem>
                <MenuItem value={1}>서비스 문의</MenuItem>
                <MenuItem value={2}>결제 문의</MenuItem>
                <MenuItem value={3}>계정 문의</MenuItem>
                <MenuItem value={4}>불편 문의</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Box className={classes.multiLineBox}>
            <Typography variant="body1">문의 내용</Typography>
            <TextField
              variant="outlined"
              name="content"
              value={inputs.title}
              onChange={onChange}
              placeholder="내용 입력"
              fullWidth
              multiline
              minRows={5}
            />
          </Box>
          <Button
            className={classes.submitBtn}
            variant="contained"
            color="primary"
          >
            제출하기
          </Button>
        </Box>
      </Box>
    </Paper>
  )
}
