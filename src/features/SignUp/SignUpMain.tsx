import MainTitle from '@/common/main-title/MainTitle'
import {
  Box,
  Button,
  ButtonBase,
  Container,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from '@material-ui/core'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import SignUpDone from './SignUpSteps/done/StepDone'
import SignUp1 from './SignUpSteps/step1/Step1'
import SignUp2 from './SignUpSteps/step2/Step2'
import SignUp3 from './SignUpSteps/step3/Step3'
import StepMoveBtnBox from './SignUpSteps/StepMoveBtnBox/StepMoveBtnBox'
import useStyles from './styles'

export type Step1InputsType = {
  username: string
  phoneNum: string
  authNum: number | null
}

const initialStep1Inputs: Step1InputsType = {
  username: '',
  phoneNum: '',
  authNum: null,
}

export type Step2InputsType = {
  userId: string
  passwd: string
  passwdMatch: string
  bankName: string
  bankOwnerName: string
  bankAccount: string
}

const initialStep2Inputs: Step2InputsType = {
  userId: '',
  passwd: '',
  passwdMatch: '',
  bankName: '',
  bankOwnerName: '',
  bankAccount: '',
}

export type Step3InputsType = {
  shopName: string
  businessNum: string
  shopTel: string
  category: string
  ownerName: string
  ownerPhoneNum: string
  holiday: string
  legalHoliday: boolean
  zipNum: number | null
  address: string
  detailAddress: string
  havePark: 0 | 1 | 2
  haveDriveThru: boolean
}

const initialStep3Inputs: Step3InputsType = {
  shopName: '',
  businessNum: '',
  shopTel: '',
  category: '',
  ownerName: '',
  ownerPhoneNum: '',
  holiday: '',
  legalHoliday: true,
  zipNum: null,
  address: '',
  detailAddress: '',
  havePark: 0,
  haveDriveThru: false,
}

export default function SignUpMain() {
  const [activeStep, setActiveStep] = React.useState(0)
  const classes = useStyles()
  const router = useRouter()

  const [step1Inputs, setStep1Inputs] =
    useState<Step1InputsType>(initialStep1Inputs)
  const [step2Inputs, setStep2Inputs] =
    useState<Step2InputsType>(initialStep2Inputs)
  const [step3Inputs, setStep3Inputs] =
    useState<Step3InputsType>(initialStep3Inputs)

  //input change event
  const onChangeStep1Inputs = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStep1Inputs({ ...step1Inputs, [event.target.name]: event.target.value })
  }

  const onChangeStep2Inputs = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStep2Inputs({ ...step2Inputs, [event.target.name]: event.target.value })
  }

  const onChangeBankName = (event: React.ChangeEvent<{ value: unknown }>) => {
    setStep2Inputs({ ...step2Inputs, bankName: event.target.value as string })
  }

  const onChangeStep3Inputs = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStep3Inputs({ ...step3Inputs, [event.target.value]: event.target.value })
  }

  //INCAPPAY 클릭이벤트
  const onClickLogo = () => {
    router.push('/')
  }

  //다음 스탭
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  //이전 스탭
  const handleBack = () => {
    if (activeStep === 0) {
      router.push('/')
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep - 1)
    }
  }

  //스탭관련 데이터
  function getSteps() {
    return ['step1', 'step2', 'step3']
  }

  const steps = getSteps()
  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return <SignUp1 inputs={step1Inputs} onChange={onChangeStep1Inputs} />
      case 1:
        return (
          <SignUp2
            userName={step1Inputs.username}
            inputs={step2Inputs}
            onChange={onChangeStep2Inputs}
            onChangeBankName={onChangeBankName}
          />
        )
      case 2:
        return <SignUp3 />

      default:
        return <SignUpDone />
    }
  }
  return (
    <Container maxWidth="md" className={classes.root}>
      <Box
        className={classes.header}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <ButtonBase onClick={onClickLogo}>
          <MainTitle titleSize="h3" />
        </ButtonBase>
        <Typography variant="body1" color="textSecondary">
          회원가입
        </Typography>
        <Stepper className={classes.stepper} activeStep={activeStep}>
          {steps.map((label, idx) => {
            const stepProps: { completed?: boolean } = {}
            const labelProps: { optional?: React.ReactNode } = {}
            if (idx < 3) {
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label}</StepLabel>
                </Step>
              )
            }
          })}
        </Stepper>
      </Box>

      <div>
        <Box>{getStepContent(activeStep)}</Box>
      </div>
      {activeStep < 3 ? (
        <StepMoveBtnBox
          handleBack={handleBack}
          handleNext={handleNext}
          step={activeStep}
        />
      ) : (
        <Box className={classes.btnSpacing}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => router.push('/')}
          >
            로그인 화면으로 이동
          </Button>
        </Box>
      )}
    </Container>
  )
}
