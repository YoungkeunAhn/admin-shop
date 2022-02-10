import CustomDialogActions from '@/common/custom-dialog-actions/CustomDialogActions'
import CustomDialogTitle from '@/common/custom-dialog-title/CustomDialogTitle'
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@material-ui/core'
import React, { useState } from 'react'
import useStyles from './styles'

type Props = {
  onClose: () => void
}

const radioList = [
  { label: '주문확인', value: 10, caption: '접수된 주문을 수락합니다.' },
  { label: '상품준비중', value: 20, caption: '상품 준비를 시작했습니다..' },
  {
    label: '준비완료',
    value: 30,
    caption: '상품 준비를 완료했습니다. 픽업이 가능한 상태입니다.',
  },
  { label: '수령완료', value: 40, caption: '고객이 상품을 수령했습니다.' },
]

export default function StateChangeDialog(props: Props) {
  const { onClose } = props
  const classes = useStyles()
  const [value, setValue] = useState<number>(1)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(event.target.value))
  }

  return (
    <Dialog open={true} onClose={onClose} maxWidth='sm' fullWidth>
      <CustomDialogTitle title='주문 상태 변경' onClose={onClose} />
      <DialogContent className={classes.content}>
        <Box className={classes.infoBox}>
          <Box>
            <Typography variant='body1' color='textSecondary'>
              주문번호
            </Typography>
            <Typography variant='body1'>2342323</Typography>
          </Box>
          <Box>
            <Typography variant='body1' color='textSecondary'>
              주문자
            </Typography>
            <Typography variant='body1'>2342323</Typography>
          </Box>
          <Box>
            <Typography variant='body1' color='textSecondary'>
              주문메뉴
            </Typography>
            <Typography variant='body1'>2342323</Typography>
          </Box>
          <Box>
            <Typography variant='body1' color='textSecondary'>
              주문총액
            </Typography>
            <Typography variant='body1'>2342323</Typography>
          </Box>
        </Box>

        <Box>
          <FormControl component='fieldset'>
            <FormLabel component='label'>주문 신고 작성</FormLabel>
            <RadioGroup value={value} onChange={onChange}>
              {radioList.map((item, idx) => (
                <Box className={classes.radioItemBox}>
                  <FormControlLabel
                    key={idx}
                    label={item.label}
                    value={item.value}
                    control={<Radio />}
                  />
                  <Typography variant='caption'>{item.caption}</Typography>
                </Box>
              ))}
            </RadioGroup>
          </FormControl>
        </Box>
        <Divider />
        <Box className={classes.captionBox}>
          <Typography variant='caption'>
            * 수령완료 선택 시, 자동으로 '실시간 주문 현황' 목록에서 삭제됩니다.
          </Typography>
          <Typography variant='caption'>
            수령완료한 주문은 '주문목록'에서 확인해주세요.
          </Typography>
        </Box>
      </DialogContent>
      <CustomDialogActions>
        <Button variant='contained' onClick={onClose}>
          돌아가기
        </Button>
        <Button variant='contained' color='primary'>
          상태변경
        </Button>
      </CustomDialogActions>
    </Dialog>
  )
}
