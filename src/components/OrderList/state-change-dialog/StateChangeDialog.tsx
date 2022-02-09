import CustomDialogTitle from '@/common/custom-dialog-title/CustomDialogTitle'
import { Button, Dialog, DialogActions, DialogContent } from '@material-ui/core'
import React from 'react'

type Props = {
  onClose: () => void
}

export default function StateChangeDialog(props: Props) {
  const { onClose } = props

  return (
    <Dialog open={true} onClose={onClose} maxWidth='sm' fullWidth>
      <CustomDialogTitle title='주문 상태 변경' onClose={onClose} />
      <DialogContent></DialogContent>
      <DialogActions>
        <Button variant='contained'>돌아가기</Button>
        <Button variant='contained' color='primary'>
          상태변경
        </Button>
      </DialogActions>
    </Dialog>
  )
}
