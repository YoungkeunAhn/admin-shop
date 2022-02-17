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

export type goodsStateType = {
  value: number
  color: string
  label: string
}

export type OrderInfoType = {
  ordernum: string
  time: string
  nickname: string
  carNum: string
  price: number
  goodsList: Array<{ amount: number; goodsId: string }>
  state: goodsStateType
}

const randomPrice = () => {
  const price = Math.floor(Math.random() * 100) * 1000
  if (price > 1000000) {
    return price / 10
  } else if (price < 10000) {
    return price * 10
  } else {
    return price
  }
}
const dataList: OrderInfoType[] = [
  {
    ordernum: 'A-SD-30221-1',
    time: '16:20:04',
    nickname: '김하니',
    carNum: '12가 3456',
    price: randomPrice(),
    goodsList: [
      { amount: 1, goodsId: '오리지널 치킨' },
      { amount: 2, goodsId: '양념 치킨' },
    ],
    state: { value: 10, color: '#dc0000', label: '주문접수' },
  },
  {
    ordernum: 'A-SD-30221-2',
    time: '16:20:04',
    nickname: '최민정',
    carNum: '123가 3456',
    price: randomPrice(),
    goodsList: [
      { amount: 1, goodsId: '오리지널 치킨' },
      { amount: 2, goodsId: '양념 치킨' },
      { amount: 1, goodsId: '오리지널 치킨' },
      { amount: 2, goodsId: '양념 치킨' },
    ],
    state: { value: 10, color: '#dc0000', label: '주문접수' },
  },
  {
    ordernum: 'A-SD-30221-3',
    time: '16:20:04',
    nickname: '황대헌',
    carNum: '123가 3456',
    price: randomPrice(),
    goodsList: [
      { amount: 1, goodsId: '오리지널 치킨' },
      { amount: 2, goodsId: '양념 치킨' },
    ],
    state: { value: 20, color: '#55bd04', label: '주문확인' },
  },
  {
    ordernum: 'A-SD-30221-4',
    time: '16:20:04',
    nickname: '김아랑',
    carNum: '123가 3456',
    price: randomPrice(),
    goodsList: [
      { amount: 1, goodsId: '오리지널 치킨' },
      { amount: 2, goodsId: '양념 치킨' },
      { amount: 1, goodsId: '오리지널 치킨' },
      { amount: 2, goodsId: '양념 치킨' },
    ],
    state: { value: 30, color: '#32acf1', label: '상품 준비중' },
  },
  {
    ordernum: 'A-SD-30221-5',
    time: '16:20:04',
    nickname: '곽윤기',
    carNum: '123가 3456',
    price: randomPrice(),
    goodsList: [
      { amount: 1, goodsId: '오리지널 치킨' },
      { amount: 2, goodsId: '양념 치킨' },
      { amount: 1, goodsId: '오리지널 치킨' },
      { amount: 2, goodsId: '양념 치킨' },
    ],
    state: { value: 40, color: '#9628ed', label: '준비완료' },
  },
  {
    ordernum: 'A-SD-30221-6',
    time: '16:20:04',
    nickname: '김선영',
    carNum: '123가 3456',
    price: randomPrice(),
    goodsList: [
      { amount: 1, goodsId: '오리지널 치킨' },
      { amount: 2, goodsId: '양념 치킨' },
      { amount: 1, goodsId: '오리지널 치킨' },
      { amount: 2, goodsId: '양념 치킨' },
    ],
    state: { value: 50, color: '#e73ac1', label: '진입' },
  },
]

export type DialogType =
  | 'stateChangeDialog'
  | 'locationDialog'
  | 'orderInfoDialog'
  | 'orderReportDialog'

export default function OrderListTable() {
  const [dialogId, setDialogId] = useState<DialogType>()
  const [stateChangeDialogProps, setStateChangeDialogProps] =
    useState<OrderInfoType>()
  const [locationDialogProps, setLocationDialogProps] =
    useState<OrderInfoType>()
  const [orderInfoDialogProps, setOrderInfoDialogProps] =
    useState<OrderInfoType>()
  const [orderReportDialogProps, setOrderReportDialogProps] =
    useState<OrderInfoType>()

  const closeDialog = () => {
    setDialogId(undefined)
    setStateChangeDialogProps(undefined)
    setLocationDialogProps(undefined)
    setOrderInfoDialogProps(undefined)
    setOrderReportDialogProps(undefined)
  }

  const openStateDialog = (data: OrderInfoType) => {
    setDialogId('stateChangeDialog')
    setStateChangeDialogProps(data)
  }
  const openLocationDialog = (data: OrderInfoType) => {
    setDialogId('locationDialog')
    setLocationDialogProps(data)
  }
  const openOrderInfoDialog = (data: OrderInfoType) => {
    setDialogId('orderInfoDialog')
    setOrderInfoDialogProps(data)
  }
  const openOrderReportDialog = (data: OrderInfoType) => {
    setDialogId('orderReportDialog')
    setOrderReportDialogProps(data)
  }

  const stateReturn = (
    stateValue: number
  ): { color: string; label: string } => {
    switch (stateValue) {
      case 10:
        return { color: '#dc0000', label: '주문접수' }
      case 20:
        return { color: '#55bd04', label: '주문확인' }
      case 30:
        return { color: '#32acf1', label: '상품 준비중' }
      case 40:
        return { color: '#9628ed', label: '준비완료' }
      case 50:
        return { color: '#1864ab', label: '수령완료' }
      default:
        return { color: '', label: 'error' }
    }
  }

  const onChangeState = (ordernum: string, stateValue: number) => {
    const optionValue = stateReturn(stateValue)
    dataList.map((data) => {
      if (data.ordernum === ordernum) {
        data.state.value = stateValue
        data.state.color = optionValue.color
        data.state.label = optionValue.label
      }
    })
    closeDialog()
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
            {dataList.map((data, idx) => (
              <OrderListTableRow
                key={idx}
                seq={idx + 1}
                openStateChnageDialog={openStateDialog}
                openLocationDialog={openLocationDialog}
                openOrderInfoDialog={openOrderInfoDialog}
                openOrderReportDialog={openOrderReportDialog}
                data={data}
              />
            ))}
          </TableBody>
        </Table>
      </StyledTableContainer>
      {dialogId === 'stateChangeDialog' && stateChangeDialogProps && (
        <StateChangeDialog
          onClose={closeDialog}
          data={stateChangeDialogProps}
          onChangeState={onChangeState}
        />
      )}
      {dialogId === 'locationDialog' && locationDialogProps && (
        <LocationViewDialog onClose={closeDialog} data={locationDialogProps} />
      )}
      {dialogId === 'orderInfoDialog' && orderInfoDialogProps && (
        <OrderInfoDialog onClose={closeDialog} data={orderInfoDialogProps} />
      )}
      {dialogId === 'orderReportDialog' && orderReportDialogProps && (
        <OrderReportDialog
          onClose={closeDialog}
          data={orderReportDialogProps}
        />
      )}
    </>
  )
}
