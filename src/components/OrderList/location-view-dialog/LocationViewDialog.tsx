import CustomDialogTitle from '@/common/custom-dialog-title/CustomDialogTitle'
import { Dialog, DialogActions, DialogContent } from '@material-ui/core'
import React from 'react'

type Props = {
  onClose: () => void
}

export default function LocationViewDialog(props: Props) {
  const { onClose } = props

  return (
    <Dialog open={true} onClose={onClose} fullWidth>
      <CustomDialogTitle title='위치 확인' onClose={onClose} />
      <DialogContent></DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  )
}
