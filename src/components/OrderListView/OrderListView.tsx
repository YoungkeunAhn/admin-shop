import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@material-ui/core'
import React from 'react'
import OrderListTableRow from '../OrderListTableRow/OrderListTableRow'
import useStyles from './styles'

type OrderInfoType = {
  id: string
  time: string
  nickname: string
  carNum: string
  price: number
  goodsList: Array<{ amount: number; goodsId: string }>
  state: number
}
const fakeData: OrderInfoType[] = [
  {
    id: 'A-SD-30221-1',
    time: '16:20:04',
    nickname: '하니',
    carNum: '12가 3456',
    price: 37000,
    goodsList: [
      { amount: 1, goodsId: '오리지널 치킨' },
      { amount: 2, goodsId: '양념 치킨' },
    ],
    state: 1,
  },
  {
    id: 'A-SD-30221-1',
    time: '16:20:04',
    nickname: '콤보',
    carNum: '123가 3456',
    price: 102000,
    goodsList: [
      { amount: 1, goodsId: '오리지널 치킨' },
      { amount: 2, goodsId: '양념 치킨' },
      { amount: 1, goodsId: '오리지널 치킨' },
      { amount: 2, goodsId: '양념 치킨' },
    ],
    state: 2,
  },
]

export default function OrderListView() {
  const classes = useStyles()
  return (
    <TableContainer>
      <TableHead className={classes.thead}>
        <TableRow>
          <TableCell>NO</TableCell>
          <TableCell>주문 번호</TableCell>
          <TableCell>주문 시간</TableCell>
          <TableCell>주문 닉네임</TableCell>
          <TableCell>자동차 번호</TableCell>
          <TableCell>주문 총액</TableCell>
          <TableCell>주문 메뉴</TableCell>
          <TableCell>주문 상태</TableCell>
          <TableCell>주문 상태변경</TableCell>
          <TableCell>위치</TableCell>
          <TableCell>결제정보</TableCell>
          <TableCell>신고</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {fakeData.map((data, idx) => (
          <OrderListTableRow key={idx} seq={idx + 1} {...data} />
        ))}
      </TableBody>
    </TableContainer>
  )
}
