import SignUp1 from '@/components/SignUp/SignUpSteps/step1/Step1'
import SignUp2 from '@/components/SignUp/SignUpSteps/step2/Step2'
import SignUp3 from '@/components/SignUp/SignUpSteps/step3/Step3'
import SignUpDone from '@/components/SignUp/SignUpSteps/done/StepDone'
import MainTitle from '@/ui-common/main-title/MainTitle'
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
import React from 'react'
import StepMoveBtnBox from './SignUpSteps/StepMoveBtnBox/StepMoveBtnBox'
import useStyles from './styles'

export default function SignUpMain() {
  const [activeStep, setActiveStep] = React.useState(0)
  const classes = useStyles()
  const router = useRouter()

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
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  //스탭관련 데이터
  function getSteps() {
    return ['step1', 'step2', 'step3']
  }

  const steps = getSteps()
  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return <SignUp1 />
      case 1:
        return <SignUp2 userName='test1' />
      case 2:
        return <SignUp3 />

      default:
        return <SignUpDone />
    }
  }
  return (
    <Container maxWidth='md' className={classes.root}>
      <Box
        className={classes.header}
        display='flex'
        flexDirection='column'
        alignItems='center'
      >
        <ButtonBase onClick={onClickLogo}>
          <MainTitle titleSize='h3' />
        </ButtonBase>
        <Typography variant='body1' color='textSecondary'>
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
            variant='contained'
            color='primary'
            onClick={() => router.push('/')}
          >
            로그인 화면으로 이동
          </Button>
        </Box>
      )}
    </Container>
  )
}
