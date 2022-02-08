import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core'
import useStyles from './styles'
import React, { useState } from 'react'
import StyledOptionPaper from '@/common/styled-page-header/StyledOptionPaper'
import ResetButton from '@/common/reset-button/ResetButton'
import SearchForm from '@/common/search-form/SearchForm'

type OrderStateType = {
  value: number
  color: string
  count: number
  label: string
}

const orderStates: OrderStateType[] = [
  { value: 1, color: '#dc0000', count: 10, label: '주문접수' },
  { value: 2, color: '#55bd04', count: 10, label: '주문확인' },
  { value: 3, color: '#32acf1', count: 2, label: '상품 준비중' },
  { value: 4, color: '#9628ed', count: 2, label: '준비완료' },
  { value: 5, color: '#e73ac1', count: 5, label: '진입' },
]

export default function OrderListSearchBar() {
  const classes = useStyles()
  const [orderState, setOrderState] = useState<number>(0)

  const onChangeSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
    setOrderState(event.target.value as number)
  }

  const onSearch = (value: string, type: string) => {
    alert(`value : ${value} type: ${type}`)
  }

  const searchMenuList = [
    { value: 'orderNum', title: '주문번호' },
    { value: 'nickname', title: '닉네임' },
    { value: 'carNum', title: '주문번호' },
  ]

  return (
    <StyledOptionPaper>
      <Box display='flex' justifyContent='space-between'>
        <Box display='flex'>
          <FormControl
            size='small'
            variant='outlined'
            className={classes.selectForm}
          >
            <InputLabel htmlFor='order-select'>주문 상태</InputLabel>
            <Select
              label='주문 상태'
              value={orderState}
              onChange={onChangeSelect}
              inputProps={{ id: 'order-select' }}
            >
              <MenuItem value={0}>주문 상태</MenuItem>
              {orderStates.map((item, idx) => (
                <MenuItem key={idx} value={item.value}>
                  {item.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <ResetButton />
          <Box display='flex'>
            {orderStates.map((state, idx) => (
              <Box key={idx} className={classes.stateBox}>
                <span
                  className={classes.circle}
                  style={{ background: `${state.color}` }}
                ></span>
                <span>{state.label}</span>
                <span className={classes.stateCount}>{state.count}</span>
              </Box>
            ))}
          </Box>
        </Box>
        <SearchForm onSearch={onSearch} menuList={searchMenuList} />
      </Box>
    </StyledOptionPaper>
  )
}
