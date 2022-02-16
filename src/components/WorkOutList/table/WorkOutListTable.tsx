import StyledTableContainer from '@/common/styled-table-container/StyledTableContainer'
import {
  Box,
  Button,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core'
import React from 'react'
import WorkOutListTbodyRow from './tbody-row/WorkOutListTbodyRow'

export type WorkOutTableDataType = {
  id: string
  dueDate: string
  workOutDate: string
  charge: number
  amount: number
  workOutType: string
  bankName: string
  bankOwnername: string
  bankNum: string
}

const dataList: WorkOutTableDataType[] = [
  {
    id: 'A-SD-30221-1',
    dueDate: '2021-01-01',
    workOutDate: '2021-01-01',
    charge: 24390,
    amount: 1493234,
    workOutType: '계좌이체',
    bankName: '국민은행',
    bankOwnername: '홍길동',
    bankNum: '123-4567-89789-456',
  },
  {
    id: 'A-SD-30221-1',
    dueDate: '2021-01-01',
    workOutDate: '2021-01-01',
    charge: 24390,
    amount: 1493234,
    workOutType: '계좌이체',
    bankName: '국민은행',
    bankOwnername: '홍길동',
    bankNum: '123-4567-89789-456',
  },
  {
    id: 'A-SD-30221-1',
    dueDate: '2021-01-01',
    workOutDate: '2021-01-01',
    charge: 24390,
    amount: 1493234,
    workOutType: '계좌이체',
    bankName: '국민은행',
    bankOwnername: '홍길동',
    bankNum: '123-4567-89789-456',
  },
  {
    id: 'A-SD-30221-1',
    dueDate: '2021-01-01',
    workOutDate: '2021-01-01',
    charge: 24390,
    amount: 1493234,
    workOutType: '계좌이체',
    bankName: '국민은행',
    bankOwnername: '홍길동',
    bankNum: '123-4567-89789-456',
  },
]

export default function WorkOutListTable() {
  return (
    <StyledTableContainer>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        p={2}
      >
        <Typography variant="h6">정산 이력</Typography>
        <Button variant="contained" color="primary">
          엑셀 다운로드
        </Button>
      </Box>
      <Box p={2}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">NO</TableCell>
              <TableCell align="center">정산 ID</TableCell>
              <TableCell align="center">정산 예정일</TableCell>
              <TableCell align="center">정산일</TableCell>
              <TableCell align="center">수수료</TableCell>
              <TableCell align="center">정산금액</TableCell>
              <TableCell align="center">정산방식</TableCell>
              <TableCell align="center">은행명</TableCell>
              <TableCell align="center">예금주명</TableCell>
              <TableCell align="center">계좌번호</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataList.map((data, idx) => (
              <WorkOutListTbodyRow key={idx} seq={idx + 1} data={data} />
            ))}
          </TableBody>
        </Table>
      </Box>
    </StyledTableContainer>
  )
}
