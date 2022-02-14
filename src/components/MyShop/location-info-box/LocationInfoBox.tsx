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

  const onChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputs3({ ...inputs3, [event.target.name]: event.target.value })
  }

  return (
    <StyledInfoPaper title="위치 정보" fullWidth>
      <Box display="flex" justifyContent="space-between" alignItems="flex-end">
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
            <RadioGroup value={inputs3.park}>
              <FormControlLabel
                control={<Radio value={0} size="small" color="primary" />}
                label="없음"
                labelPlacement="end"
              />
              <FormControlLabel
                control={<Radio value={1} size="small" color="primary" />}
                label="상가 주차장"
                labelPlacement="end"
              />
              <FormControlLabel
                control={<Radio value={2} size="small" color="primary" />}
                label="개인 주차장"
                labelPlacement="end"
              />
            </RadioGroup>
          </DataInputForm>
        </Box>
        <Box>
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
            <RadioGroup onChange={onChange3} value={inputs3.thru}>
              <FormControlLabel
                value={false}
                control={<Radio size="small" color="primary" />}
                label="없음"
                labelPlacement="end"
              />
              <FormControlLabel
                value={true}
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
