import StyledTableContainer from '@/common/styled-table-container/StyledTableContainer'
import DetailInfoDialog from '@/features/OrderHistory/detail-info-dialog/DetailInfoDialog'
import HistoryReportDialog from '@/features/OrderHistory/history-report-dialog/HistoryReportDialog'
import LocalStorage from '@/hooks/LocalStorage'
import { reportSubmitMsg } from '@/types/alert-msg'
import { baseUrl } from '@/types/api'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import OrderHistoryTbodyRow from './tbody-row/OrderHistoryTbodyRow'

export type HistoryDataType = {
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

type DialogId = 'detailInfoDialog' | 'reportDialog'

export default function OrderHistoryTable() {
  const [orderList, SetOrderList] = useState<HistoryDataType[]>([])
  const [dialogId, setDialogId] = useState<DialogId>()
  const [detailInfoDialogProps, setDetailInfoDialogProps] =
    useState<HistoryDataType>()
  const [reportDialogProps, setReportDialogProps] = useState<HistoryDataType>()
  const [loading, setLoading] = useState<boolean>(false)
  const shopid = LocalStorage.getItem('shop')

  const openDetailInfoDialog = (data: HistoryDataType) => {
    setDialogId('detailInfoDialog')
    setDetailInfoDialogProps(data)
  }

  const openReportDialog = (data: HistoryDataType) => {
    setDialogId('reportDialog')
    setReportDialogProps(data)
  }

  const onCloseDialog = () => {
    setDialogId(undefined)
    setDetailInfoDialogProps(undefined)
  }

  //신고 제출
  const onSubmit = () => {
    setDialogId(undefined)
    alert(reportSubmitMsg)
  }

  const orderListLoad = async () => {
    setLoading(true)
    try {
      const { data } = await axios({
        url: 'apiv1/shop/main/orderlist',
        baseURL: baseUrl,
        method: 'GET',
        params: { shopid: 'test' },
      })
      SetOrderList(data)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    orderListLoad()
    SetOrderList([])
  }, [])

  return (
    <>
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
              <TableCell>결제 상태</TableCell>
              <TableCell>주문 총액</TableCell>
              <TableCell>주문 처리</TableCell>
              <TableCell>상세 정보</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* {orderList.map((data, idx) => (
              <OrderHistoryTbodyRow
                key={idx}
                seq={idx + 1}
                data={data}
                openDetailInfoDialog={openDetailInfoDialog}
              />
            ))} */}
          </TableBody>
        </Table>
      </StyledTableContainer>
      {dialogId === 'detailInfoDialog' && detailInfoDialogProps && (
        <DetailInfoDialog
          onClose={onCloseDialog}
          data={detailInfoDialogProps}
          openReportDialog={openReportDialog}
        />
      )}
      {dialogId === 'reportDialog' && reportDialogProps && (
        <HistoryReportDialog
          onClose={onCloseDialog}
          data={reportDialogProps}
          onSubmit={onSubmit}
        />
      )}
    </>
  )
}
