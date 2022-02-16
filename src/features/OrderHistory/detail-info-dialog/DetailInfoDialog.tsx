import CustomDialogActions from '@/common/custom-dialog-actions/CustomDialogActions'
import CustomDialogTitle from '@/common/custom-dialog-title/CustomDialogTitle'
import DataViewLine from '@/common/data-view-line/DataViewLine'
import { HistoryDataType } from '@/components/OrderHistory/table/OrderHistoryTable'
import { Box, Button, Dialog, DialogContent, Divider } from '@material-ui/core'
import React from 'react'

type Props = {
  onClose: () => void
  data: HistoryDataType
  openReportDialog: (data: HistoryDataType) => void
}

export default function DetailInfoDialog(props: Props) {
  const { data, onClose, openReportDialog } = props

  return (
    <Dialog open={true} onClose={onClose} fullWidth maxWidth="sm">
      <CustomDialogTitle title="상세 정보" onClose={onClose} />
      <DialogContent>
        <Box pt={2} pb={2}>
          <DataViewLine title="주문번호" value={data.ordernum} />
          <DataViewLine title="주문자" value={data.nickname} />
          <DataViewLine title="자동차 번호" value={data.carnum} />
          <DataViewLine title="주문 처리" value={data.state} />
          <DataViewLine title="수령 시간" value={data.pickupTime} />
        </Box>
        <Divider />
        <Box pt={2} pb={2}>
          <DataViewLine title="결제 방법" value="" />
          <DataViewLine title="결제 상태" value="" />
          <DataViewLine title="결제 정보" value="" />
          <DataViewLine title="결제 시간" value="" />
        </Box>
        <Divider />
        <Box pt={2} pb={2}>
          <DataViewLine title="주문 메뉴" value="" />
          <DataViewLine title="주문 총액" value={data.price} />
          <DataViewLine title="쿠폰 사용" value="" />
          <DataViewLine title="포인트 사용" value="" />
          <DataViewLine title="결제 총액" value="" />
        </Box>
      </DialogContent>
      <CustomDialogActions>
        <Box
          width="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Button variant="contained" onClick={() => openReportDialog(data)}>
            주문신고
          </Button>
          <Button variant="contained" color="primary" onClick={onClose}>
            확인
          </Button>
        </Box>
      </CustomDialogActions>
    </Dialog>
  )
}
