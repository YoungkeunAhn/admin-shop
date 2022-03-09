import DataInputForm from '@/common/data-input-form/DataInputForm'
import StyledInfoPaper from '@/common/styled-info-paper/StyledInfoPaper'
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'
import React from 'react'
import { Step2InputsType } from '../../SignInMain'

type Props = {
  userName: string
  inputs: Step2InputsType
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onChangeBankName: (event: React.ChangeEvent<{ value: unknown }>) => void
}

export default function SignUp2(props: Props) {
  const { userName, inputs, onChange, onChangeBankName } = props

  return (
    <>
      <StyledInfoPaper title="계정정보">
        <>
          <DataInputForm
            label="아이디"
            name="userId"
            value={inputs.userId}
            onChange={onChange}
          />
          <DataInputForm
            label="이름"
            name="userName"
            value={userName}
            onChange={onChange}
            disabled={true}
          />
          <DataInputForm
            label="비밀번호"
            name="passwd"
            value={inputs.passwd}
            type="password"
            onChange={onChange}
          />
          <DataInputForm
            label="비밀번호 확인"
            name="passwdMatch"
            value={inputs.passwdMatch}
            type="password"
            onChange={onChange}
          />
        </>
      </StyledInfoPaper>
      <StyledInfoPaper title="정산정보">
        <>
          <DataInputForm
            label="은행"
            name="bankName"
            value={inputs.bankName}
            onChange={onChange}
            require={true}
            noInput={true}
          >
            <FormControl variant="outlined" size="small">
              <InputLabel onAnimationStart={undefined}>은행명</InputLabel>
              <Select
                label="은행명"
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={inputs.bankName}
                onChange={onChangeBankName}
              >
                <MenuItem value={'국민'}>국민</MenuItem>
                <MenuItem value={'신한'}>신한</MenuItem>
                <MenuItem value={'기업'}>기업</MenuItem>
              </Select>
            </FormControl>
          </DataInputForm>
          <DataInputForm
            label="예금주명"
            name="bankOwnerName"
            value={inputs.bankOwnerName}
            onChange={onChange}
            require={true}
          />
          <DataInputForm
            label="계좌번호"
            name="bankAccount"
            value={inputs.bankAccount}
            onChange={onChange}
            require={true}
          />
        </>
      </StyledInfoPaper>
    </>
  )
}
