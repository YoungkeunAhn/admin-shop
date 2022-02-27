import CustomDialogTitle from '@/common/custom-dialog-title/CustomDialogTitle'
import NaverMapView from '@/common/naver-map-view/NaverMapView'
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from '@material-ui/core'
import React from 'react'
import { OrderInfoType } from '../table/OrderListTable'
import useStyles from './styles'

type Props = {
  onClose: () => void
  data: OrderInfoType
}

export default function LocationViewDialog(props: Props) {
  const { onClose, data } = props
  const classes = useStyles()

  return (
    <Dialog open={true} onClose={onClose} fullWidth>
      <CustomDialogTitle title="위치 확인" onClose={onClose} />
      <DialogContent className={classes.content}>
        <Box className={classes.infoBox}>
          <Box>
            <Typography variant="body1">주문번호</Typography>
            <Typography variant="body1">{data.ordernum}</Typography>
          </Box>

          <Box>
            <Typography variant="body1">주문자</Typography>
            <Typography variant="body1">{data.nickname}</Typography>
          </Box>

          <Box>
            <Typography variant="body1">주문상태</Typography>
            <Typography variant="body1">{data.state.label}</Typography>
          </Box>

          <Box>
            <Typography variant="body1">예상시간</Typography>
            <Typography variant="body1">30분</Typography>
          </Box>
        </Box>
        <Box className={classes.imgBox}>
          <NaverMapView />
        </Box>
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  )
}
