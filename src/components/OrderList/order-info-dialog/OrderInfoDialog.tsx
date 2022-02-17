import CustomDialogTitle from '@/common/custom-dialog-title/CustomDialogTitle'
import {
  Box,
  Dialog,
  DialogContent,
  Divider,
  Typography,
} from '@material-ui/core'
import React from 'react'
import { OrderInfoType } from '../table/OrderListTable'
import useStyles from './styles'

type Props = {
  onClose: () => void
  data: OrderInfoType
}

export default function OrderInfoDialog(props: Props) {
  const { onClose, data } = props
  const classes = useStyles()

  return (
    <Dialog open={true} onClose={onClose} fullWidth>
      <CustomDialogTitle title="주문 확인" onClose={onClose} />
      <DialogContent className={classes.content}>
        <Box className={classes.infoBox}>
          <Box className={classes.infoLine}>
            <Typography variant="body1">주문번호</Typography>
            <Typography variant="body1">{data.ordernum}</Typography>
          </Box>
          <Box className={classes.infoLine}>
            <Typography variant="body1">주문자</Typography>
            <Typography variant="body1">{data.nickname}</Typography>
          </Box>
        </Box>
        <Divider />
        <Box className={classes.infoBox}>
          <Box className={classes.infoLine}>
            <Typography variant="body1">결제방법</Typography>
            <Typography variant="body1">카드결제</Typography>
          </Box>
          <Box className={classes.infoLine}>
            <Typography variant="body1">결제상태</Typography>
            <Typography variant="body1">{data.state.label}</Typography>
          </Box>
          <Box className={classes.infoLine}>
            <Typography variant="body1">결제정보</Typography>
            <Typography variant="body1">123-4567-889****-***</Typography>
          </Box>
          <Box className={classes.infoLine}>
            <Typography variant="body1">결제시간</Typography>
            <Typography variant="body1">{data.time}</Typography>
          </Box>
        </Box>
        <Divider />
        <Box className={classes.infoBox}>
          <Box className={classes.infoLine}>
            <Typography variant="body1">주문메뉴</Typography>
            <Box className={classes.goodsListBox}>
              {data.goodsList.map((goods, idx) => (
                <Typography key={idx} variant="body1">
                  {goods.goodsId}({goods.amount})
                </Typography>
              ))}
            </Box>
          </Box>
          <Box className={classes.infoLine}>
            <Typography variant="body1">주문총액</Typography>
            <Typography variant="body1">{data.price}</Typography>
          </Box>
          <Box className={classes.infoLine}>
            <Typography variant="body1">포인트사용</Typography>
            <Typography variant="body1">-1000원</Typography>
          </Box>
          <Box className={classes.infoLine}>
            <Typography variant="body1">쿠폰사용</Typography>
            <Typography variant="body1">
              -1000원 (첫결제쿠폰 20,000만원이상)
            </Typography>
          </Box>
          <Box className={classes.infoLine}>
            <Typography variant="body1">결제총액</Typography>
            <Typography variant="body1">{data.price - 2000}원</Typography>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  )
}
