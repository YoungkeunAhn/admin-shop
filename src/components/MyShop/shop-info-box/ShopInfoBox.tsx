import DataInputForm from '@/common/data-input-form/DataInputForm'
import StyledInfoPaper from '@/common/styled-info-paper/StyledInfoPaper'
import { InputsType2 } from '@/features/MyStoreInfo/MyStoreInfo'
import { Box, FormControlLabel, Radio, RadioGroup } from '@material-ui/core'
import React, { useState } from 'react'

type Props = {
  data: InputsType2
}

export default function ShopInfoBox(props: Props) {
  const { data } = props
  const [inputs2, setInputs2] = useState<InputsType2>(data)

  const onChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputs2({ ...inputs2, [event.target.name]: event.target.value })
  }

  return (
    <StyledInfoPaper title="지점 정보" fullWidth>
      <Box display="flex" justifyContent="space-between" alignItems="flex-end">
        <Box>
          <DataInputForm
            label="지점명"
            name="shopname"
            value={inputs2.shopname}
            onChange={onChange2}
            require
          />
          <DataInputForm
            label="사업자번호"
            name="shopnum"
            value={inputs2.shopnum}
            onChange={onChange2}
            require
          />
          <DataInputForm
            label="지점번호"
            name="shopcall"
            value={inputs2.shopcall}
            onChange={onChange2}
          />
          <DataInputForm
            label="휴무"
            name="holiday"
            value={inputs2.holiday}
            onChange={onChange2}
          />
        </Box>
        <Box>
          <DataInputForm
            label="업종형태"
            name="shoptype"
            value={inputs2.shoptype}
            onChange={onChange2}
          />
          <DataInputForm
            label="대표자명"
            name="ownername"
            value={inputs2.ownername}
            onChange={onChange2}
            require
          />
          <DataInputForm
            label="대표자 연락처"
            name="ownercall"
            value={inputs2.ownercall}
            onChange={onChange2}
            require
          />
          <DataInputForm
            label="공휴일"
            name="setHoliday"
            value={inputs2.setHoliday}
            onChange={onChange2}
            noInput
          >
            <RadioGroup
              name="legalHoliday"
              value={inputs2.setHoliday}
              onChange={onChange2}
            >
              <FormControlLabel
                control={<Radio color="primary" size="small" value={true} />}
                label="영업중"
                labelPlacement="end"
              />
              <FormControlLabel
                control={<Radio color="primary" size="small" value={false} />}
                label="영업안함"
                labelPlacement="end"
              />
            </RadioGroup>
          </DataInputForm>
        </Box>
      </Box>
    </StyledInfoPaper>
  )
}
