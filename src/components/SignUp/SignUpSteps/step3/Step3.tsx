import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@material-ui/core'
import { CheckBox } from '@material-ui/icons'
import React, { useState } from 'react'
import SignUpDataFiled from '../../SignUpDataFiled/SignUpDataFiled'

import StepPaperBox from '../../StepPaperBox/StepPaperBox'

type Props = {}

type ShopInfoInputsType = {
  shopName: string
  businessNum: string
  shopTel: string
  category: string
  ownerName: string
  ownerPhoneNum: string
  holiday: string
  legalHoliday: boolean
}

const initialInputs: ShopInfoInputsType = {
  shopName: '',
  businessNum: '',
  shopTel: '',
  category: '',
  ownerName: '',
  ownerPhoneNum: '',
  holiday: '',
  legalHoliday: true,
}

export default function SignUp3(props: Props) {
  const [inputs, setInputs] = useState<ShopInfoInputsType>(initialInputs)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value })
  }
  return (
    <StepPaperBox title='지점정보'>
      <>
        <Box>
          <SignUpDataFiled
            label='지점명'
            name='shopName'
            value={inputs.shopName}
            onChange={onChange}
            require
          />
          <SignUpDataFiled
            label='사업자번호'
            name='businessNum'
            value={inputs.businessNum}
            onChange={onChange}
            require
          />
          <SignUpDataFiled
            label='지점번호'
            name='shopTel'
            value={inputs.shopTel}
            onChange={onChange}
          />
          <SignUpDataFiled
            label='휴무'
            name='legalHoliday'
            value={inputs.legalHoliday}
            onChange={onChange}
            noInput
          >
            <RadioGroup
              aria-label='gender'
              name='legalHoliday'
              value={inputs.legalHoliday}
              onChange={onChange}
            >
              <FormControlLabel
                // value={true}
                control={<Radio />}
                label='영업중'
                labelPlacement='end'
              />
              <FormControlLabel
                // value={false}
                control={<Radio />}
                label='영업안함'
                labelPlacement='end'
              />
            </RadioGroup>
          </SignUpDataFiled>
        </Box>

        <Box>
          <SignUpDataFiled
            label='업종형태'
            name='category'
            value={inputs.category}
            onChange={onChange}
          />
          <SignUpDataFiled
            label='대표자명'
            name='ownerName'
            value={inputs.ownerName}
            onChange={onChange}
            require
          />
          <SignUpDataFiled
            label='대표자 연락처'
            name='ownerPhoneNum'
            value={inputs.ownerPhoneNum}
            onChange={onChange}
            require
          />
          <SignUpDataFiled
            label='공휴일'
            name='holiday'
            value={inputs.holiday}
            onChange={onChange}
            noInput
          />
        </Box>
      </>
    </StepPaperBox>
  )
}
