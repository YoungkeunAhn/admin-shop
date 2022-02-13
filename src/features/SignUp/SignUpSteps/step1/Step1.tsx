import { Box, Button } from '@material-ui/core'
import React, { useState } from 'react'
import SignUpDataFiled from '../../SignUpDataFiled/SignUpDataFiled'
import StyledInfoPaper from '@/common/StyledInfoPaper/StyledInfoPaper'

import useStyles from './styles'

type Props = {}

type InputsType = {
  username: string
  phoneNum: string
  authNum: number | null
}

const initialInputs: InputsType = {
  username: '',
  phoneNum: '',
  authNum: null,
}

const alertMsg = `
해당 휴대폰 번호로 인증번호가 전송되었습니다.
인증번호를 입력해주세요.
`
export default function SignUp1(props: Props) {
  const [inputs, setInputs] = useState<InputsType>(initialInputs)
  const [disabled, setDisabled] = useState<boolean>(false)
  const classes = useStyles()

  //input change event
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [event.target.name]: event.target.value })
  }

  //인증하기 버튼 클릭
  const onClickPhoneAuthBtn = () => {
    setDisabled(true)
    alert(alertMsg)
  }

  return (
    <StyledInfoPaper title="본인인증 확인">
      <>
        <SignUpDataFiled
          label="이름"
          name="username"
          value={inputs.username}
          onChange={onChangeInput}
        />
        <Box display="flex" alignItems="center">
          <SignUpDataFiled
            label="휴대폰번호"
            name="phoneNum"
            value={inputs.phoneNum}
            onChange={onChangeInput}
            disabled={disabled}
          />
          <Button
            className={classes.phoneAuthBtn}
            variant="contained"
            color="primary"
            onClick={onClickPhoneAuthBtn}
          >
            인증하기
          </Button>
        </Box>
        <SignUpDataFiled
          label="인증번호"
          name="authNum"
          value={inputs.authNum}
          onChange={onChangeInput}
        />
      </>
    </StyledInfoPaper>
  )
}
