import DataInputForm from '@/common/data-input-form/DataInputForm'
import StyledInfoPaper from '@/common/styled-info-paper/StyledInfoPaper'
import { InputsType1 } from '@/features/MyStoreInfo/MyStoreInfo'
import { Box } from '@material-ui/core'
import React, { useState } from 'react'

type Props = {
  data: InputsType1
}

export default function AccountInfoBox(props: Props) {
  const { data } = props
  const [inputs1, setInputs1] = useState<InputsType1>(data)

  const onChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputs1({ ...inputs1, [event.target.name]: event.target.value })
  }

  return (
    <StyledInfoPaper title="계정 정보" fullWidth>
      <Box display="flex" justifyContent="space-between" alignItems="flex-end">
        <Box>
          <DataInputForm
            label="아이디"
            name="id"
            value={inputs1.id}
            onChange={onChange1}
            require
            disabled
          />
          <DataInputForm
            label="이름"
            name="nickname"
            value={inputs1.nickname}
            onChange={onChange1}
            require
          />
          <DataInputForm
            type="password"
            label="비밀번호 변경"
            name="password"
            value={inputs1.password}
            onChange={onChange1}
            require
          />
        </Box>
        <Box>
          <DataInputForm
            label="휴대폰번호"
            name="phonenum"
            value={inputs1.phonenum}
            onChange={onChange1}
            require
            disabled
          />
          <DataInputForm
            type="password"
            label="비밀번호 변경 확인"
            name="passwordCheck"
            value={inputs1.passwordCheck}
            onChange={onChange1}
            require
          />
        </Box>
      </Box>
    </StyledInfoPaper>
  )
}
