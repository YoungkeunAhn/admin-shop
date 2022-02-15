import StyledTableContainer from '@/common/styled-table-container/StyledTableContainer'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core'
import React from 'react'
import ReviewManageTbodyRow from './tbodyRow/ReviewManageTbodyRow'

type DataType = {
  ordernum: string
  date: string
  nickname: string
  score: number
  content: string
  hasReply: boolean
  hasReport: boolean
}

const dataList: DataType[] = [
  {
    ordernum: 'A-SD-30221-1',
    date: '2021-01-01',
    nickname: '하니',
    score: 4,
    content: '친절하고 좋은 음식점 입니다.',
    hasReply: false,
    hasReport: false,
  },
  {
    ordernum: 'A-SD-30221-1',
    date: '2021-01-01',
    nickname: '하니',
    score: 3,
    content: '친절하고 좋은 음식점 입니다.',
    hasReply: false,
    hasReport: false,
  },
  {
    ordernum: 'A-SD-30221-1',
    date: '2021-01-01',
    nickname: '하니',
    score: 2,
    content: '친절하고 좋은 음식점 입니다.',
    hasReply: true,
    hasReport: true,
  },
  {
    ordernum: 'A-SD-30221-1',
    date: '2021-01-01',
    nickname: '하니',
    score: 1,
    content: '친절하고 좋은 음식점 입니다.',
    hasReply: true,
    hasReport: false,
  },
]

export default function ReviewManageTable() {
  return (
    <StyledTableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>NO</TableCell>
            <TableCell>주문 번호</TableCell>
            <TableCell>등록 일자</TableCell>
            <TableCell>주문자 닉네임</TableCell>
            <TableCell>별점</TableCell>
            <TableCell>내용</TableCell>
            <TableCell>댓글달기</TableCell>
            <TableCell>신고</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataList.map((data, idx) => (
            <ReviewManageTbodyRow key={idx} seq={idx + 1} {...data} />
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  )
}
