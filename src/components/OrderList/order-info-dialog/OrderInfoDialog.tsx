import CustomDialogTitle from '@/common/custom-dialog-title/CustomDialogTitle'
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  Divider,
  Typography,
} from '@material-ui/core'
import React from 'react'
import useStyles from './styles'

type Props = {
  onClose: () => void
}

export default function OrderInfoDialog(props: Props) {
  const { onClose } = props
  const classes = useStyles()

  return (
    <Dialog open={true} onClose={onClose} fullWidth>
      <CustomDialogTitle title='주문 확인' onClose={onClose} />
      <DialogContent className={classes.content}>
        <Box className={classes.infoBox}>
          <Box>
            <Typography variant='body1'>주문번호</Typography>
            <Typography variant='body1'>123123</Typography>
          </Box>
          <Box>
            <Typography variant='body1'>주문자</Typography>
            <Typography variant='body1'>123123</Typography>
          </Box>
        </Box>
        <Divider />
        <Box className={classes.infoBox}>
          <Box>
            <Typography variant='body1'>결제방법</Typography>
            <Typography variant='body1'>123213123</Typography>
          </Box>
          <Box>
            <Typography variant='body1'>결제상태</Typography>
            <Typography variant='body1'>123213123</Typography>
          </Box>
          <Box>
            <Typography variant='body1'>결제정보</Typography>
            <Typography variant='body1'>123213123</Typography>
          </Box>
          <Box>
            <Typography variant='body1'>결제시간</Typography>
            <Typography variant='body1'>123213123</Typography>
          </Box>
        </Box>
        <Divider />
        <Box className={classes.infoBox}>
          <Box>
            <Typography variant='body1'>주문메뉴</Typography>
            <Typography variant='body1'>123213</Typography>
          </Box>
          <Box>
            <Typography variant='body1'>주문총액</Typography>
            <Typography variant='body1'>123213</Typography>
          </Box>
          <Box>
            <Typography variant='body1'>포인트사용</Typography>
            <Typography variant='body1'>123213</Typography>
          </Box>
          <Box>
            <Typography variant='body1'>쿠폰사용</Typography>
            <Typography variant='body1'>123213</Typography>
          </Box>
          <Box>
            <Typography variant='body1'>결제총액</Typography>
            <Typography variant='body1'>123213원</Typography>
          </Box>
        </Box>
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  )
}
