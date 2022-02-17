import { Box, IconButton, Paper, Typography } from '@material-ui/core'
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined'
import React from 'react'
import DataLine from './data-line/DataLine'
import useStyles from './stlyes'

export default function InfoView() {
  const classes = useStyles()
  return (
    <Box className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h6" className={classes.title}>
          금액 정보
        </Typography>
        <Box className={classes.infoBox}>
          <DataLine title="정산 예정일" data="2021-01-01" />
          <DataLine title="정산 수수료" data="5%" />
          <DataLine title="수수료 합계" data="-24,390원" />
          <DataLine title="정산예정 금액" data="1,493,234원" />
        </Box>
      </Paper>
      <Paper className={classes.paper}>
        <Box display="flex" alignItems="center">
          <Typography variant="h6" className={classes.title}>
            정산 정보
          </Typography>
          <IconButton size="small">
            <BorderColorOutlinedIcon fontSize="small" color="primary" />
          </IconButton>
        </Box>
        <Box className={classes.infoBox}>
          <DataLine title="정산방식" data="계좌이체" />
          <DataLine title="은행명" data="국민은행" />
          <DataLine title="예금주명" data="홍길동" />
          <DataLine title="계좌번호" data="132-4567-892314-213" />
        </Box>
      </Paper>
    </Box>
  )
}
