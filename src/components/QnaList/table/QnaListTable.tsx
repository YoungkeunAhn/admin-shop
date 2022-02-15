import StyledTableContainer from '@/common/styled-table-container/StyledTableContainer'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core'
import React from 'react'
import QnaListTbodyRow from './tbody-row/QnaListTbodyRow'

export type QnaDataType = {
  date: string
  type: string
  reply: string
  title: string
}

const dataList: QnaDataType[] = [
  {
    date: '2021-01-01',
    type: '서비스 문의',
    reply: 'ok',
    title: '어떻게 사용하는 건가요?',
  },
  {
    date: '2021-01-01',
    type: '결제 문의',
    reply: '',
    title: '결제 취소 처리',
  },
  {
    date: '2021-01-01',
    type: '계정 문의',
    reply: 'ok',
    title: '비밀번호 변경',
  },
  {
    date: '2021-01-01',
    type: '불편 문의',
    reply: '',
    title: '위치 서비스 개선해주세요',
  },
]

export default function QnaListTable() {
  return (
    <StyledTableContainer>
      <Typography variant="h6">내 문의 내역</Typography>
      <Table>
        <TableBody>
          {dataList.map((data, idx) => (
            <QnaListTbodyRow
              key={idx}
              seq={idx + 1}
              data={data}
              expand={false}
            />
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  )
}
