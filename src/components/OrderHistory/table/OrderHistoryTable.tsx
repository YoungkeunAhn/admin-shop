import StyledTableContainer from '@/common/styled-table-container/StyledTableContainer'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core'
import React from 'react'
import OrderHistoryTbodyRow from './tbody-row/OrderHistoryTbodyRow'

type DataType = {
  ordernum: string
  nickname: string
  date: string
  time: string
  pickupTime: string
  carnum: string
  state: string
  price: string
  result: string
}

const dataList: DataType[] = [
  {
    ordernum: 'A-SD-30221-1',
    nickname: '하니',
    date: '2021-01-01',
    time: '16:20:04',
    pickupTime: '16:30:04',
    carnum: '12가 3455',
    state: '정상/계좌',
    price: '20,000원',
    result: '주문접수',
  },
  {
    ordernum: 'A-SD-30221-1',
    nickname: '하니',
    date: '2021-01-01',
    time: '16:20:04',
    pickupTime: '16:30:04',
    carnum: '12가 3455',
    state: '정상/카드',
    price: '20,000원',
    result: '주문접수',
  },
  {
    ordernum: 'A-SD-30221-1',
    nickname: '하니',
    date: '2021-01-01',
    time: '16:20:04',
    pickupTime: '16:30:04',
    carnum: '12가 3455',
    state: '정상/계좌',
    price: '200,000원',
    result: '주문접수',
  },
  {
    ordernum: 'A-SD-30221-1',
    nickname: '하니',
    date: '2021-01-01',
    time: '16:20:04',
    pickupTime: '16:30:04',
    carnum: '12가 3455',
    state: '정상/계좌',
    price: '20,000원',
    result: '주문접수',
  },
]
export default function OrderHistoryTable() {
  return (
    <StyledTableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>NO</TableCell>
            <TableCell>주문 번호</TableCell>
            <TableCell>주문자 닉네임</TableCell>
            <TableCell>주문 일자</TableCell>
            <TableCell>주문 시간</TableCell>
            <TableCell>픽업 시간</TableCell>
            <TableCell>자동차 번호</TableCell>
            <TableCell>걸제 상태</TableCell>
            <TableCell>주문 총액</TableCell>
            <TableCell>주문 처리</TableCell>
            <TableCell>상세 정보</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataList.map((data, idx) => (
            <OrderHistoryTbodyRow key={idx} seq={idx + 1} {...data} />
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  )
}
