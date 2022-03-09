import DataInputForm from '@/common/data-input-form/DataInputForm'
import StyledInfoPaper from '@/common/styled-info-paper/StyledInfoPaper'
import { InputsType3 } from '@/features/MyStoreInfo/MyStoreInfo'
import { Box, FormControlLabel, Radio, RadioGroup } from '@material-ui/core'
import React, { useState } from 'react'

type Props = {
  data: InputsType3
}

export default function LocationInfoBox(props: Props) {
  const { data } = props
  const [inputs3, setInputs3] = useState<InputsType3>(data)
  const [parkValue, setParkValue] = useState<number>(data.park)
  const [thruValue, setThruValue] = useState<number>(data.thru)

  const onChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputs3({ ...inputs3, [event.target.name]: event.target.value })
  }

  const onChangeParkValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setParkValue(parseInt(event.target.value))
  }
  const onChangeThruValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setThruValue(parseInt(event.target.value))
  }

  return (
    <StyledInfoPaper title="위치 정보" fullWidth>
      <Box display="flex" alignItems="flex-end">
        <Box>
          <DataInputForm
            label="우편번호"
            name="zipCode"
            value={inputs3.zipCode}
            onChange={onChange3}
            require
          />
          <DataInputForm
            label="기본주소"
            name="address"
            value={inputs3.address}
            onChange={onChange3}
            require
          />
          <DataInputForm
            label="주차장 유무"
            name="park"
            value={inputs3.park}
            onChange={onChange3}
            noInput
          >
            <RadioGroup value={parkValue} onChange={onChangeParkValue}>
              <FormControlLabel
                value={0}
                label="없음"
                labelPlacement="end"
                control={<Radio size="small" color="primary" />}
              />
              <FormControlLabel
                value={1}
                label="상가 주차장"
                labelPlacement="end"
                control={<Radio size="small" color="primary" />}
              />
              <FormControlLabel
                value={2}
                label="개인 주차장"
                labelPlacement="end"
                control={<Radio size="small" color="primary" />}
              />
            </RadioGroup>
          </DataInputForm>
        </Box>
        <Box ml={10}>
          <DataInputForm
            label="상세주소"
            name="detailAddress"
            value={inputs3.detailAddress}
            onChange={onChange3}
            require
          />
          <DataInputForm
            label="드라이브 스루"
            name="thru"
            value={inputs3.thru}
            onChange={onChange3}
            noInput
          >
            <RadioGroup onChange={onChangeThruValue} value={thruValue}>
              <FormControlLabel
                value={0}
                control={<Radio size="small" color="primary" />}
                label="없음"
                labelPlacement="end"
              />
              <FormControlLabel
                value={1}
                control={<Radio size="small" color="primary" />}
                label="있음"
                labelPlacement="end"
              />
            </RadioGroup>
          </DataInputForm>
        </Box>
      </Box>
    </StyledInfoPaper>
  )
}
