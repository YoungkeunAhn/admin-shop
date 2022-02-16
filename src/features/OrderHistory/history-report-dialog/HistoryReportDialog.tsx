import CustomDialogActions from '@/common/custom-dialog-actions/CustomDialogActions'
import CustomDialogTitle from '@/common/custom-dialog-title/CustomDialogTitle'
import DataViewLine from '@/common/data-view-line/DataViewLine'
import { HistoryDataType } from '@/components/OrderHistory/table/OrderHistoryTable'
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
  TextField,
  Typography,
} from '@material-ui/core'
import React, { useState } from 'react'
import useStyles from './styles'

type Props = {
  onSubmit: () => void
  onClose: () => void
  data: HistoryDataType
}

const radioList = [
  { label: '단순실수', value: 0 },
  { label: '주문취소', value: 1 },
  { label: '환불요구', value: 2 },
  { label: '기타', value: 3 },
]

export default function HistoryReportDialog(props: Props) {
  const classes = useStyles()
  const { onSubmit, onClose, data } = props
  const [reportRadioValue, setReportRadioValue] = useState<number>(0)
  const [reportContent, setReportContent] = useState<string>('')

  const onChangeRadio = (event: React.ChangeEvent<{ value: unknown }>) => {
    setReportRadioValue(event.target.value as number)
  }

  const onChangeContent = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReportContent(event.target.value)
  }

  return (
    <Dialog open={true} onClose={onClose} fullWidth maxWidth="sm">
      <CustomDialogTitle title="주문 신고" onClose={onClose} />
      <DialogContent className={classes.content}>
        <Box className={classes.infoBox}>
          <DataViewLine title="주문번호" value={data.ordernum} />
          <DataViewLine title="주문자" value={data.nickname} />
          <DataViewLine title="주문메뉴" value="" />
          <DataViewLine title="주문총액" value={data.price} />
        </Box>
        <FormControl component="fieldset">
          <Typography variant="body1" gutterBottom>
            신고 사유 선택
          </Typography>
          <RadioGroup
            className={classes.radioBox}
            value={reportRadioValue}
            onChange={onChangeRadio}
          >
            {radioList.map((item, idx) => (
              <FormControlLabel
                key={idx}
                label={item.label}
                control={<Radio color="primary" value={item.value} />}
              />
            ))}
          </RadioGroup>
        </FormControl>
        <Box>
          <Typography variant="body1" gutterBottom>
            신고 내용
          </Typography>
          <TextField
            variant="outlined"
            value={reportContent}
            onChange={onChangeContent}
            placeholder="내용 입력"
            fullWidth
            multiline
            minRows={5}
          />
        </Box>
      </DialogContent>
      <CustomDialogActions>
        <Button variant="contained" onClick={onClose}>
          돌아가기
        </Button>
        <Button variant="contained" color="primary" onClick={onSubmit}>
          제출하기
        </Button>
      </CustomDialogActions>
    </Dialog>
  )
}
