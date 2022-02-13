import { FormControl, MenuItem, Select } from '@material-ui/core'
import React, { useState } from 'react'
import SignUpDataFiled from '../../SignUpDataFiled/SignUpDataFiled'
import StyledInfoPaper from '@/common/StyledInfoPaper/StyledInfoPaper'

type Props = {
  userName: string
}

type UserInfoInputysType = {
  userId: string
  passwd: string
  passwdMatch: string
}

type BankInfoInputsType = {
  bankName: string
  bankOwnerName: string
  bankAccount: string
}

const initialUserInfo: UserInfoInputysType = {
  userId: '',
  passwd: '',
  passwdMatch: '',
}

const initialBankInfo: BankInfoInputsType = {
  bankName: '',
  bankOwnerName: '',
  bankAccount: '',
}

export default function SignUp2(props: Props) {
  const {} = props

  const [userInputs, setUserInputs] =
    useState<UserInfoInputysType>(initialUserInfo)
  const [bankInputs, setBankInputs] =
    useState<BankInfoInputsType>(initialBankInfo)
  const [selectBank, setSelectBank] = useState<string>('국민')

  const onChangeUserInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInputs({ ...userInputs, [event.target.name]: event.target.value })
  }

  const onChangeBankInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBankInputs({ ...bankInputs, [event.target.name]: event.target.value })
  }

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelectBank(event.target.value as string)
  }

  return (
    <>
      <StyledInfoPaper title="계정정보">
        <>
          <SignUpDataFiled
            label="아이디"
            name="userId"
            value={userInputs.userId}
            onChange={onChangeUserInputs}
          />
          <SignUpDataFiled
            label="이름"
            name="userName"
            value={'test1'}
            onChange={onChangeUserInputs}
            disabled={true}
          />
          <SignUpDataFiled
            label="비밀번호"
            name="passwd"
            value={userInputs.passwd}
            type="password"
            onChange={onChangeUserInputs}
          />
          <SignUpDataFiled
            label="비밀번호 확인"
            name="passwdMatch"
            value={userInputs.passwdMatch}
            type="password"
            onChange={onChangeUserInputs}
          />
        </>
      </StyledInfoPaper>
      <StyledInfoPaper title="정산정보">
        <>
          <SignUpDataFiled
            label="은행"
            name="bankName"
            value={bankInputs.bankName}
            onChange={onChangeBankInputs}
            require={true}
            noInput={true}
          >
            <FormControl variant="outlined" size="small">
              <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value={'국민'}
                onChange={handleChange}
              >
                <MenuItem value={'국민'}>국민</MenuItem>
                <MenuItem value={'신한'}>신한</MenuItem>
                <MenuItem value={'기업'}>기업</MenuItem>
              </Select>
            </FormControl>
          </SignUpDataFiled>
          <SignUpDataFiled
            label="예금주명"
            name="bankOwnerName"
            value={bankInputs.bankOwnerName}
            onChange={onChangeBankInputs}
            require={true}
          />
          <SignUpDataFiled
            label="계좌번호"
            name="bankAccount"
            value={bankInputs.bankAccount}
            onChange={onChangeBankInputs}
            require={true}
          />
        </>
      </StyledInfoPaper>
    </>
  )
}
