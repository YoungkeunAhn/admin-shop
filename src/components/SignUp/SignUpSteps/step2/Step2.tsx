import React, { useState } from 'react'
import SignUpDataFiled from '../../SignUpDataFiled/SignUpTextFiled'
import StepPaperBox from '../../StepPaperBox/StepPaperBox'

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

  const onChangeUserInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserInputs({ ...userInputs, [event.target.name]: event.target.value })
  }

  const onChangeBankInputs = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBankInputs({ ...bankInputs, [event.target.name]: event.target.value })
  }
  return (
    <>
      <StepPaperBox title='계정정보'>
        <>
          <SignUpDataFiled
            label='아이디'
            name='userId'
            value={userInputs.userId}
            onChange={onChangeUserInputs}
          />
          <SignUpDataFiled
            label='이름'
            name='userName'
            value={'test1'}
            onChange={onChangeUserInputs}
            disabled={true}
          />
          <SignUpDataFiled
            label='비밀번호'
            name='passwd'
            value={userInputs.passwd}
            type='password'
            onChange={onChangeUserInputs}
          />
          <SignUpDataFiled
            label='비밀번호 확인'
            name='passwdMatch'
            value={userInputs.passwdMatch}
            type='password'
            onChange={onChangeUserInputs}
          />
        </>
      </StepPaperBox>
      <StepPaperBox title='정산정보'>
        <SignUpDataFiled
          label='은행'
          name='은행'
          value={bankInputs.bankName}
          onChange={onChangeBankInputs}
          require={true}
          noInput={false}
        >
          <select></select>
        </SignUpDataFiled>
      </StepPaperBox>
    </>
  )
}
