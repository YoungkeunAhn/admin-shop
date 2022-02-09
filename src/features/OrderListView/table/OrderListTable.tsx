import StyledTableContainer from '@/common/styled-table-container/StyledTableContainer'
import LocationViewDialog from '@/components/OrderList/location-view-dialog/LocationViewDialog'
import OrderInfoDialog from '@/components/OrderList/order-info-dialog/OrderInfoDialog'
import OrderReportDialog from '@/components/OrderList/order-report-dialog/OrderReportDialog'
import StateChangeDialog from '@/components/OrderList/state-change-dialog/StateChangeDialog'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core'
import React, { useState } from 'react'
import OrderListTableRow from './tbody-row/OrderListTbodyRow'

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

export type DialogType =
  | 'stateChangeDialog'
  | 'locationViewDialog'
  | 'orderInfoDialog'
  | 'orderReportDialog'

export default function OrderListTable() {
  const [dialogId, setDialogId] = useState<DialogType>()

  const openDialog = (id: DialogType) => {
    setDialogId(id)
  }

  const stateChangeDialogProps = {
    onClose: () => {
      setDialogId(undefined)
    },
  }
  const locationViewDialogProps = {
    onClose: () => {
      setDialogId(undefined)
    },
  }
  const orderInfoDialogProps = {
    onClose: () => {
      setDialogId(undefined)
    },
  }
  const orderReportDialogProps = {
    onClose: () => {
      setDialogId(undefined)
    },
  }

  return (
    <>
      <StyledTableContainer>
        <Table>
          <TableHead>
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
              <OrderListTableRow
                key={idx}
                seq={idx + 1}
                openDialog={openDialog}
                {...data}
              />
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
      {dialogId === 'stateChangeDialog' && (
        <StateChangeDialog {...stateChangeDialogProps} />
      )}
      {dialogId === 'locationViewDialog' && (
        <LocationViewDialog {...locationViewDialogProps} />
      )}
      {dialogId === 'orderInfoDialog' && (
        <OrderInfoDialog {...orderInfoDialogProps} />
      )}
      {dialogId === 'orderReportDialog' && (
        <OrderReportDialog {...orderReportDialogProps} />
      )}
    </>
  )
}
