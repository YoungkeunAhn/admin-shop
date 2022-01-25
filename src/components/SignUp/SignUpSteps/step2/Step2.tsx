import React from 'react'
import SignUpDataFiled from '../../SignUpDataFiled/SignUpDataFiled'
import StepPaperBox from '../../StepPaperBox/StepPaperBox'

type Props = {
  handleNext: () => void
  handleBack: () => void
}

export default function SignUp2(props: Props) {
  const { handleNext, handleBack } = props
  return (
    <>
      <StepPaperBox title='계정정보'>
        <SignUpDataFiled />
      </StepPaperBox>
    </>
  )
}
