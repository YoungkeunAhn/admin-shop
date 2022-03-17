import DataInputLine from "@/components/CameraList/carmera-add-paper/data-input-line/DataInputLine"
import { errorSaveMsg, successSaveMsg } from "@/types/alert-msg"
import { baseUrl } from "@/types/api"
import { GoodsDataType } from "@/types/enum"
import { Box, Button, Paper, TextField, Typography } from "@material-ui/core"
import axios from "axios"
import { useRouter } from "next/router"
import React, { useEffect, useRef, useState } from "react"
import useStyles from "./styles"

const initialInputs: GoodsDataType = {
  goodsid: 0,
  goodsname: "",
  price: 0,
  image: "",
  summary: "",
}

type Props = {
  goodsid?: number
}

export default function GoodsAddView(props: Props) {
  const classes = useStyles()
  const { goodsid } = props
  const router = useRouter()
  const [inputs, setInputs] = useState<GoodsDataType>(initialInputs)
  const inputFileRef = useRef<HTMLInputElement>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [goodsData, setGoodsData] = useState<GoodsDataType>(initialInputs)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value })
  }

  const onClickUploadBtn = () => {
    if (inputFileRef.current) {
      inputFileRef.current.click()
    }
  }

  const onSave = async () => {
    try {
      await axios.post(baseUrl + "")
      alert(successSaveMsg)
    } catch (e) {
      console.error(e)
      alert(errorSaveMsg)
    }
  }

  const goodsDataLoad = async () => {
    setLoading(true)
    try {
      const { data } = await axios.get(baseUrl + "apiv1/shop/setting/goodslist")
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (goodsid) {
      goodsDataLoad()
    }
  }, [])

  return (
    <Box className={classes.root}>
      <Paper>
        <Box p={3}>
          <Typography variant="h6" className={classes.title}>
            메뉴 정보
          </Typography>

          <Box width={600}>
            <DataInputLine
              title="메뉴명"
              name="name"
              value={inputs.goodsname}
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
                accept="image/*"
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
        onClick={() => {}}
      >
        등록하기
      </Button>
    </Box>
  )
}
