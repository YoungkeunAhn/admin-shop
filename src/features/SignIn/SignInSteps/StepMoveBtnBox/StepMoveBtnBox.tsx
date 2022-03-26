import { baseUrl } from '@/types/api'
import { Box, Button } from '@material-ui/core'
import axios from 'axios'
import React from 'react'

type Props = {
  handleBack: () => void
  handleNext: () => void
  step: number
}
export default function StepMoveBtnBox(props: Props) {
  const { handleBack, handleNext, step } = props

  const onSave = async () => {
    try {
      await axios({
        url: 'apiv1/shop/login/signin',
        baseURL: baseUrl,
        method: 'POST',
      })
      handleNext()
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <Box
      mt={4}
      pb={10}
      display="flex"
      justifyContent="space-evenly"
      alignItems="center"
      width="inherit"
    >
      <Button variant="contained" color="default" onClick={handleBack}>
        이전으로
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={step === 2 ? onSave : handleNext}
      >
        {step === 2 ? '회원가입 완료' : '다음으로'}
      </Button>
    </Box>
  )
}
