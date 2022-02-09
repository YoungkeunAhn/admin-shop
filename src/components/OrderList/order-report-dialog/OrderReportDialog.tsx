import CustomDialogTitle from '@/common/custom-dialog-title/CustomDialogTitle'
import { Dialog, DialogActions, DialogContent } from '@material-ui/core'
import React from 'react'

type Props = {
  onClose: () => void
}

export default function OrderReportDialog(props: Props) {
  const { onClose } = props

  return (
    <Dialog open={true} onClose={onClose} fullWidth>
      <CustomDialogTitle title='주문 신고' onClose={onClose} />
      <DialogContent></DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  )
}
