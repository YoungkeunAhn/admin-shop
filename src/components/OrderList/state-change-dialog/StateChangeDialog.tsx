import CustomDialogActions from '@/common/custom-dialog-actions/CustomDialogActions'
import CustomDialogTitle from '@/common/custom-dialog-title/CustomDialogTitle'
import { RealTimeOrderDataType } from '@/types/enum'
import {
  Box,
  Button,
  Dialog,
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

export type StateChangeDialogPropsType = {
  data: RealTimeOrderDataType
  onClose: () => void
  onChangeState: (ordernum: number, stateValue: number) => void
}

const radioList = [
  { label: '주문확인', value: 20, caption: '접수된 주문을 수락합니다.' },
  { label: '상품준비중', value: 30, caption: '상품 준비를 시작했습니다..' },
  {
    label: '준비완료',
    value: 40,
    caption: '상품 준비를 완료했습니다. 픽업이 가능한 상태입니다.',
  },
  { label: '수령완료', value: 50, caption: '고객이 상품을 수령했습니다.' },
]

export default function StateChangeDialog(props: StateChangeDialogPropsType) {
  const { onClose, data, onChangeState } = props
  const classes = useStyles()
  const [stateValue, setStateValue] = useState<number>(data.orderstate)

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStateValue(parseInt(event.target.value))
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
            <Typography variant='body1'>{data.orderid}</Typography>
          </Box>
          <Box>
            <Typography variant='body1' color='textSecondary'>
              주문자
            </Typography>
            <Typography variant='body1'>{data.username}</Typography>
          </Box>
          <Box>
            <Typography variant='body1' color='textSecondary'>
              주문메뉴
            </Typography>
            <Box display='flex'>
              {data.goodslist.map((goods, idx) => (
                <Typography key={idx} variant='body1'>
                  {goods.goodsname}({goods.amount})
                </Typography>
              ))}
            </Box>
          </Box>
          <Box>
            <Typography variant='body1' color='textSecondary'>
              주문총액
            </Typography>
            <Typography variant='body1'>{data.price}</Typography>
          </Box>
        </Box>

        <Box>
          <FormControl component='fieldset'>
            <FormLabel component='label'>주문 신고 작성</FormLabel>
            <RadioGroup value={stateValue} onChange={onChange}>
              {radioList.map((item, idx) => (
                <FormControlLabel
                  key={idx}
                  label={item.label}
                  value={item.value}
                  control={<Radio color='primary' />}
                />
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
        <Button
          variant='contained'
          color='primary'
          onClick={() => onChangeState(data.orderid, stateValue)}
        >
          상태변경
        </Button>
      </CustomDialogActions>
    </Dialog>
  )
}
