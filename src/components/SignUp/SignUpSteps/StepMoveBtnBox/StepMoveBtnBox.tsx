import { Box, Button } from '@material-ui/core'
import React from 'react'

type Props = {
  handleBack: () => void
  handleNext: () => void
}
export default function StepMoveBtnBox(props: Props) {
  const { handleBack, handleNext } = props

  return (
    <Box
      mt={4}
      display='flex'
      justifyContent='space-evenly'
      alignItems='center'
    >
      <Button variant='contained' color='default' onClick={handleBack}>
        이전으로
      </Button>
      <Button variant='contained' color='primary' onClick={handleNext}>
        다음으로
      </Button>
    </Box>
  )
}
