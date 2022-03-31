import DataInputForm from '@/common/data-input-form/DataInputForm'
import StyledInfoPaper from '@/common/styled-info-paper/StyledInfoPaper'
import AccountInfoBox from '@/components/MyShop/account-info-box/AccountInfoBox'
import LocationInfoBox from '@/components/MyShop/location-info-box/LocationInfoBox'
import ShopInfoBox from '@/components/MyShop/shop-info-box/ShopInfoBox'
import { successSaveMsg } from '@/types/alert-msg'
import { baseUrl } from '@/types/api'
import { Box, Button } from '@material-ui/core'
import axios from 'axios'
import React, { useCallback, useState } from 'react'
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
  nickname: '안영근',
  password: '123123',
  passwordCheck: '123123',
  phonenum: '010-1234-1234',
}

const initialInput2: InputsType2 = {
  shopname: '바른치킨',
  shopnum: '123-45-6789',
  shopcall: '02-1234-1234',
  shoptype: '요식업',
  ownername: '안영근',
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

  const onSave = useCallback(async () => {
    try {
      await axios({
        url: 'apiv1/shop/setting/shopinfo',
        baseURL: baseUrl,
        method: 'POST',
        data: JSON.stringify({
          accountOwner: '정산계좌 예금주',
          accountbankid: 0,
          accountnum: '정산계좌 번호',
          address: '매장주소',
          businessnum: '사업자번호',
          category: 'thru/parking/oiling/tolling',
          havedrivethru: 0,
          havepark: 0,
          holiday: '매월 2, 4째주 수요일 휴무',
          passwd: 'string',
          phonenum: '전화번호',
          shopid: 'string',
          shopname: 'string',
          shopnumber: 0,
          shopowner: 'string',
          zipcode: 0,
        }),
      })
      alert('성공')
    } catch (e) {
      console.error(e)
    }
  }, [])

  return (
    <Box>
      <AccountInfoBox data={initialInput1} />
      <ShopInfoBox data={initialInput2} />
      <LocationInfoBox data={initialInput3} />
      <Button
        variant='contained'
        color='primary'
        className={classes.saveBtn}
        onClick={onSave}
      >
        현재상태 저장
      </Button>
    </Box>
  )
}
