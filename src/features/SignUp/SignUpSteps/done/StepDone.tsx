import StyledInfoPaper from '@/common/StyledInfoPaper/StyledInfoPaper'
import { Box, Typography } from '@material-ui/core'
import React from 'react'

import useStyles from './styles'

export default function SignUpDone() {
  const classes = useStyles()

  return (
    <StyledInfoPaper title="">
      <Box className={classes.root}>
        <Box>
          <img src="checkOk.png" alt="check ok image" />
        </Box>
        <Typography variant="body1">
          회원가입이 <b>완료</b>되었습니다.
        </Typography>
        <Typography className={classes.caption} variant="caption">
          입력한 아이디와 비밀번호를 통해 로그인하세요.
        </Typography>
      </Box>
    </StyledInfoPaper>
  )
}
