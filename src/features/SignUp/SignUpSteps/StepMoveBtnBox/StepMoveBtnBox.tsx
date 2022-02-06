import { Box, Button } from '@material-ui/core'
import React from 'react'

type Props = {
  handleBack: () => void
  handleNext: () => void
  step: number
}
export default function StepMoveBtnBox(props: Props) {
  const { handleBack, handleNext, step } = props

  return (
    <Box
      mt={4}
      pb={10}
      display='flex'
      justifyContent='space-evenly'
      alignItems='center'
      width='inherit'
    >
      <Button variant='contained' color='default' onClick={handleBack}>
        이전으로
      </Button>
      <Button variant='contained' color='primary' onClick={handleNext}>
        {step === 2 ? '회원가입 완료' : '다음으로'}
      </Button>
    </Box>
  )
}
