import StyledTableContainer from '@/common/styled-table-container/StyledTableContainer'
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core'
import React from 'react'
import CameraListTbodyRow from './tbody-row/CameraListTbodyRow'

export type CameraDataType = {
  image: string
  name: string
  mac: string
  location: string
  date: string
}

const dataList: CameraDataType[] = [
  {
    image: '',
    name: '메인 카메라',
    mac: 'AA-BB-CC-DD',
    location: '주차장 입구',
    date: '2021-01-01',
  },
  {
    image: 'checkOk.png',
    name: '서브 카메라1',
    mac: 'AA-BB-CC-EE',
    location: '지하 1층',
    date: '2021-01-01',
  },
  {
    image: '',
    name: '서브 카메라2',
    mac: 'AA-BB-CC-FF',
    location: '지하 2층',
    date: '2021-01-01',
  },
]

export default function CameraListTable() {
  return (
    <StyledTableContainer>
      <Box p={2}>
        <Typography variant="h6">카메라 목록</Typography>
      </Box>
      <Box p={2}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">NO</TableCell>
              <TableCell align="center">썸네일 이미지</TableCell>
              <TableCell align="center">카메라 이름</TableCell>
              <TableCell align="center">MAC 주소</TableCell>
              <TableCell align="center">카메라 위치</TableCell>
              <TableCell align="center">등록일</TableCell>
              <TableCell align="center">수정</TableCell>
              <TableCell align="center">삭제</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataList.map((data, idx) => (
              <CameraListTbodyRow key={idx} seq={idx} data={data} />
            ))}
          </TableBody>
        </Table>
      </Box>
    </StyledTableContainer>
  )
}
