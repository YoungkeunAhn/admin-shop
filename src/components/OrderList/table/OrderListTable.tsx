import StyledTableContainer from '@/common/styled-table-container/StyledTableContainer'
import LocationViewDialog from '@/components/OrderList/location-view-dialog/LocationViewDialog'
import OrderInfoDialog from '@/components/OrderList/order-info-dialog/OrderInfoDialog'
import OrderReportDialog from '@/components/OrderList/order-report-dialog/OrderReportDialog'
import StateChangeDialog from '@/components/OrderList/state-change-dialog/StateChangeDialog'
import { baseUrl } from '@/types/api'
import { RealTimeOrderDataType } from '@/types/enum'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core'
import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import OrderListTableRow from './tbody-row/OrderListTbodyRow'

export type goodsStateType = {
  value: number
  color: string
  label: string
}

const fakeData: RealTimeOrderDataType[] = [
  {
    carnum: '213가1234나',
    category: '',
    dateorder: '2022-01-01',
    goodslist: [
      {
        amount: 1,
        goodsid: 1,
        goodsname: '테스트',
      },
    ],
    orderid: 1,
    orderstate: 20,
    point_x: 1,
    point_y: 1,
    userid: 1,
    username: '테스트',
    price: 20000,
  },
]

export type DialogType =
  | 'stateChangeDialog'
  | 'locationDialog'
  | 'orderInfoDialog'
  | 'orderReportDialog'

export default function OrderListTable() {
  const [realTimeOrderData, setRealTimeOrderData] =
    useState<RealTimeOrderDataType[]>(fakeData)
  const [dialogId, setDialogId] = useState<DialogType>()
  const [stateChangeDialogProps, setStateChangeDialogProps] =
    useState<RealTimeOrderDataType>()
  const [locationDialogProps, setLocationDialogProps] =
    useState<RealTimeOrderDataType>()
  const [orderInfoDialogProps, setOrderInfoDialogProps] =
    useState<RealTimeOrderDataType>()
  const [orderReportDialogProps, setOrderReportDialogProps] =
    useState<RealTimeOrderDataType>()

  const [loading, setLoading] = useState<boolean>(false)

  const closeDialog = () => {
    setDialogId(undefined)
    setStateChangeDialogProps(undefined)
    setLocationDialogProps(undefined)
    setOrderInfoDialogProps(undefined)
    setOrderReportDialogProps(undefined)
  }

  const openStateDialog = (data: RealTimeOrderDataType) => {
    setDialogId('stateChangeDialog')
    setStateChangeDialogProps(data)
  }
  const openLocationDialog = (data: RealTimeOrderDataType) => {
    setDialogId('locationDialog')
    setLocationDialogProps(data)
  }
  const openOrderInfoDialog = (data: RealTimeOrderDataType) => {
    setDialogId('orderInfoDialog')
    setOrderInfoDialogProps(data)
  }
  const openOrderReportDialog = (data: RealTimeOrderDataType) => {
    setDialogId('orderReportDialog')
    setOrderReportDialogProps(data)
  }

  const onChangeState = useCallback(
    async (orderid: number, stateValue: number) => {
      try {
        await axios({
          url: 'apiv1/shop/main/orderstate',
          baseURL: baseUrl,
          method: 'POST',
          data: JSON.stringify({ shopid: 'test' }),
        })

        closeDialog()
      } catch (e) {
        console.error(e)
      }
    },
    []
  )

  const loadRealTimeList = async () => {
    setLoading(true)
    try {
      const { data } = await axios({
        url: 'apiv1/shop/main/realtimeorderlist',
        baseURL: baseUrl,
        method: 'GET',
        params: { shopid: 'test' },
      })
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    loadRealTimeList()
  }, [realTimeOrderData])

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
            {realTimeOrderData.map((data, idx) => (
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
