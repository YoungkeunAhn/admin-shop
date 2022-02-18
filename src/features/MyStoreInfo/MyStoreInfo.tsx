import DataInputForm from '@/common/data-input-form/DataInputForm'
import StyledInfoPaper from '@/common/styled-info-paper/StyledInfoPaper'
import AccountInfoBox from '@/components/MyShop/account-info-box/AccountInfoBox'
import LocationInfoBox from '@/components/MyShop/location-info-box/LocationInfoBox'
import ShopInfoBox from '@/components/MyShop/shop-info-box/ShopInfoBox'
import { saveMsg } from '@/types/alert-msg'
import { Box, Button } from '@material-ui/core'
import React, { useState } from 'react'
import useStyles from './styles'

export type InputsType1 = {
  id: string
  nickname: string
  phonenum: string
  password: string
  passwordCheck: string
}
export type InputsType2 = {
  shopname: string
  shopnum: string
  shopcall: string
  shoptype: string
  ownername: string
  ownercall: string
  holiday: string
  setHoliday: number
}

export type InputsType3 = {
  zipCode: string
  address: string
  detailAddress: string
  park: number
  thru: number
}

const initialInput1: InputsType1 = {
  id: 'test',
  nickname: '홍길동',
  password: '123123',
  passwordCheck: '123123',
  phonenum: '010-1234-1234',
}

const initialInput2: InputsType2 = {
  shopname: '깐부치킨',
  shopnum: '123-45-6789',
  shopcall: '02-1234-1234',
  shoptype: '요식업',
  ownername: '홍길동',
  ownercall: '010-1234-1234',
  holiday: '매월 2,4째주 수요일 휴무',
  setHoliday: 0,
}

const initialInput3: InputsType3 = {
  zipCode: '123-456',
  address: '서울시 마포구 도화대로 433번길',
  detailAddress: '30-1 로엔빌 101동 302호',
  park: 1,
  thru: 0,
}

export default function MyStoreInfo() {
  const classes = useStyles()

  const onSave = () => {
    alert(saveMsg)
  }

  return (
    <Box>
      <AccountInfoBox data={initialInput1} />
      <ShopInfoBox data={initialInput2} />
      <LocationInfoBox data={initialInput3} />
      <Button
        variant="contained"
        color="primary"
        className={classes.saveBtn}
        onClick={onSave}
      >
        현재상태 저장
      </Button>
    </Box>
  )
}
