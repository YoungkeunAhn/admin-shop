import CustomDialogTitle from '@/common/custom-dialog-title/CustomDialogTitle'
import { Dialog, DialogActions, DialogContent } from '@material-ui/core'
import React from 'react'

type Props = {
  onClose: () => void
}

export default function OrderInfoDialog(props: Props) {
  const { onClose } = props

  return (
    <Dialog open={true} onClose={onClose} fullWidth>
      <CustomDialogTitle title='주문 확인' onClose={onClose} />
      <DialogContent></DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  )
}
