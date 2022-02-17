import CustomDialogActions from '@/common/custom-dialog-actions/CustomDialogActions'
import CustomDialogTitle from '@/common/custom-dialog-title/CustomDialogTitle'
import { orderReportMsg } from '@/types/alert-msg'
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@material-ui/core'
import React, { useState } from 'react'
import { OrderInfoType } from '../table/OrderListTable'
import useStyles from './styles'

type Props = {
  onClose: () => void
  data: OrderInfoType
}

const radioList = [
  { value: 1, label: '욕설/비방글' },
  { value: 2, label: '악의적인 내용의 글' },
  { value: 3, label: '음란성 글' },
  { value: 4, label: '불법적인 내용의 글' },
]

export default function OrderReportDialog(props: Props) {
  const { onClose } = props
  const classes = useStyles()
  const [value, setValue] = useState<number>(1)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(event.target.value))
  }

  const onReport = () => {
    onClose()
    alert(orderReportMsg)
  }

  return (
    <Dialog open={true} onClose={onClose} fullWidth>
      <CustomDialogTitle title="주문 신고" onClose={onClose} />
      <DialogContent className={classes.content}>
        <Box className={classes.infoBox}>
          <Box>
            <Typography variant="body1">주문번호</Typography>
            <Typography variant="body1">21312312312</Typography>
          </Box>
          <Box>
            <Typography variant="body1">등록일</Typography>
            <Typography variant="body1">21312312312</Typography>
          </Box>
          <Box>
            <Typography variant="body1">주문자</Typography>
            <Typography variant="body1">21312312312</Typography>
          </Box>
        </Box>
        <FormControl component="fieldset">
          <FormLabel component="label">신고 사유 선택</FormLabel>
          <RadioGroup value={value} onChange={onChange}>
            {radioList.map((item, idx) => (
              <FormControlLabel
                key={idx}
                label={item.label}
                value={item.value}
                control={<Radio />}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </DialogContent>
      <CustomDialogActions>
        <Button variant="contained" onClick={onClose}>
          돌아가기
        </Button>
        <Button variant="contained" color="primary" onClick={onReport}>
          신고하기
        </Button>
      </CustomDialogActions>
    </Dialog>
  )
}
