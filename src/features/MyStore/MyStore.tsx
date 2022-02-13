import StyledInfoPaper from '@/features/SignUp/StyledInfoPaper/StyledInfoPaper'
import { Box } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'

export default function MyStore() {
  const classes = useStyles()

  return (
    <Box>
      <StyledInfoPaper title="계정 정보">
        <Box>
          <Box className={classes.left}></Box>
          <Box className={classes.right}></Box>
        </Box>
      </StyledInfoPaper>
      <StyledInfoPaper title="지점 정보">
        <Box>
          <Box className={classes.left}></Box>
          <Box className={classes.right}></Box>
        </Box>
      </StyledInfoPaper>
      <StyledInfoPaper title="위치 정보">
        <Box>
          <Box className={classes.left}></Box>
          <Box className={classes.right}></Box>
        </Box>
      </StyledInfoPaper>
    </Box>
  )
}
