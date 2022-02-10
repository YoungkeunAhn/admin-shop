import CustomDialogTitle from '@/common/custom-dialog-title/CustomDialogTitle'
import {
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  Typography,
} from '@material-ui/core'
import React from 'react'
import useStyles from './styles'

type Props = {
  onClose: () => void
}

export default function LocationViewDialog(props: Props) {
  const { onClose } = props
  const classes = useStyles()

  return (
    <Dialog open={true} onClose={onClose} fullWidth>
      <CustomDialogTitle title='위치 확인' onClose={onClose} />
      <DialogContent className={classes.content}>
        <Box className={classes.infoBox}>
          <Box>
            <Typography variant='body1'>주문번호</Typography>
            <Typography variant='body1'>123123</Typography>
          </Box>

          <Box>
            <Typography variant='body1'>주문자</Typography>
            <Typography variant='body1'>123213</Typography>
          </Box>

          <Box>
            <Typography variant='body1'>주문상태</Typography>
            <Typography variant='body1'>123123</Typography>
          </Box>

          <Box>
            <Typography variant='body1'>예상시간</Typography>
            <Typography variant='body1'>123123</Typography>
          </Box>
        </Box>
        <Box>
          <img src='map_image.png' alt='map image' width='100%' height={200} />
        </Box>
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  )
}
