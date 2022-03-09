import StyledTableContainer from '@/common/styled-table-container/StyledTableContainer'
import DetailInfoDialog from '@/features/OrderHistory/detail-info-dialog/DetailInfoDialog'
import HistoryReportDialog from '@/features/OrderHistory/history-report-dialog/HistoryReportDialog'
import { reportSubmitMsg } from '@/types/alert-msg'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core'
import React, { useState } from 'react'
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

const dataList: HistoryDataType[] = [
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

type DialogId = 'detailInfoDialog' | 'reportDialog'

export default function OrderHistoryTable() {
  const [dialogId, setDialogId] = useState<DialogId>()
  const [detailInfoDialogProps, setDetailInfoDialogProps] =
    useState<HistoryDataType>()
  const [reportDialogProps, setReportDialogProps] = useState<HistoryDataType>()

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
            {dataList.map((data, idx) => (
              <OrderHistoryTbodyRow
                key={idx}
                seq={idx + 1}
                data={data}
                openDetailInfoDialog={openDetailInfoDialog}
              />
            ))}
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
