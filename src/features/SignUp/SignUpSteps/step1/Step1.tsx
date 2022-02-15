import DataInputForm from '@/common/data-input-form/DataInputForm'
import StyledInfoPaper from '@/common/styled-info-paper/StyledInfoPaper'
import { Box, Button } from '@material-ui/core'
import React, { useState } from 'react'
import { Step1InputsType } from '../../SignUpMain'
import useStyles from './styles'

type Props = {
  inputs: Step1InputsType
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const alertMsg = `
해당 휴대폰 번호로 인증번호가 전송되었습니다.
인증번호를 입력해주세요.
`

export default function SignUp1(props: Props) {
  const { inputs, onChange } = props
  const [disabled, setDisabled] = useState<boolean>(false)
  const classes = useStyles()

  //인증하기 버튼 클릭
  const onClickPhoneAuthBtn = () => {
    setDisabled(true)
    alert(alertMsg)
  }

  return (
    <StyledInfoPaper title="본인인증 확인">
      <DataInputForm
        label="이름"
        name="username"
        value={inputs.username}
        onChange={onChange}
        require
      />
      <Box display="flex" alignItems="center" mt={2} mb={2}>
        <DataInputForm
          label="휴대폰번호"
          name="phoneNum"
          value={inputs.phoneNum}
          onChange={onChange}
          disabled={disabled}
          require
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
      <DataInputForm
        label="인증번호"
        name="authNum"
        value={inputs.authNum}
        onChange={onChange}
        require
      />
    </StyledInfoPaper>
  )
}
