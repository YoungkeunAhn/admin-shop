import DataInputLine from '@/components/CameraList/carmera-add-paper/data-input-line/DataInputLine'
import {
  goodsList,
  GoodsDataType,
} from '@/components/GoodsList/table/GoodsListTable'
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  Paper,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from '@material-ui/core'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import useStyles from './styles'

const initialInputs: GoodsDataType = {
  name: '',
  price: null,
  sale: null,
  image: '',
  summary: '',
  hidden: 1,
  date: Date.now().toString(),
}
export default function GoodsAddView() {
  const classes = useStyles()
  const router = useRouter()
  const [inputs, setInputs] = useState<GoodsDataType>(initialInputs)
  const [radioValue, setRadioValue] = useState<number>(initialInputs.hidden)
  const inputFileRef = useRef<HTMLInputElement>(null)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value })
  }

  const onChangeRadioValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue(parseInt(event.target.value))
    setInputs({ ...inputs, hidden: parseInt(event.target.value) })
  }

  const onClickUploadBtn = () => {
    if (inputFileRef.current) {
      inputFileRef.current.click()
    }
  }

  const onCreateGoods = (data: GoodsDataType) => {
    goodsList.concat(data)
    router.push('/my-store/goods')
  }

  return (
    <Box className={classes.root}>
      <Paper>
        <Box p={3}>
          <Typography variant="h6" className={classes.title}>
            메뉴 정보
          </Typography>
          <Box display="flex" alignItems="center" mb={2}>
            <Typography variant="body1" className={classes.lineTitle}>
              게시상태
            </Typography>
            <FormControl>
              <RadioGroup
                value={radioValue}
                onChange={onChangeRadioValue}
                className={classes.radioBox}
              >
                <FormControlLabel
                  value={1}
                  control={<Radio size="small" color="primary" />}
                  label="게시"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value={0}
                  control={<Radio size="small" color="primary" />}
                  label="숨김"
                  labelPlacement="end"
                />
              </RadioGroup>
            </FormControl>
          </Box>
          <Box width={600}>
            <DataInputLine
              title="메뉴명"
              name="name"
              value={inputs.name}
              onChange={onChange}
              placeholder="메뉴명 입력"
            />
            <DataInputLine
              title="가격"
              name="price"
              value={inputs.price}
              onChange={onChange}
              placeholder="가격 입력"
            />
            <DataInputLine
              title="할인율"
              name="sale"
              value={inputs.sale}
              placeholder="0~100% 입력"
            />
          </Box>

          <Box mt={2} mb={2}>
            <Box display="flex" alignItems="center">
              <Typography className={classes.lineTitle}>
                썸네일 이미지
              </Typography>
              <Box width={450}>
                <TextField
                  variant="outlined"
                  size="small"
                  value={inputs.image.substring(12)}
                  fullWidth
                  disabled
                  onClick={onClickUploadBtn}
                />
              </Box>
              <Button
                variant="outlined"
                color="primary"
                className={classes.uploadBtn}
                onClick={onClickUploadBtn}
              >
                업로드
              </Button>
              <input
                type="file"
                name="image"
                ref={inputFileRef}
                value={inputs.image}
                onChange={onChange}
                hidden
              />
            </Box>
          </Box>
          <Box width={775}>
            <DataInputLine
              title="간단 설명"
              name="summary"
              value={inputs.summary}
              onChange={onChange}
              placeholder="내용 입력"
              multiLine
              minRows={3}
            />
          </Box>
        </Box>
      </Paper>
      <Button
        variant="contained"
        color="primary"
        className={classes.addBtn}
        onClick={() => onCreateGoods(inputs)}
      >
        등록하기
      </Button>
    </Box>
  )
}
