import StyledTableContainer from '@/common/styled-table-container/StyledTableContainer'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core'
import React from 'react'
import GoodsListTbodyRow from './tbody-row/GoodsListTbodyRow'

type DataType = {
  image: string
  name: string
  summary: string
  price: number
  sale: number
  date: string
  hidden: boolean
}

const dataList: DataType[] = [
  {
    image: 'checkOk.png',
    name: '오리지널 치킨',
    summary: '기본 메뉴 입니다.',
    date: '2021-01-01',
    price: 19000,
    sale: 10,
    hidden: false,
  },
  {
    image: '',
    name: '양념 치킨',
    summary: '기본 메뉴 입니다.',
    date: '2021-01-01',
    price: 20000,
    sale: 10,
    hidden: false,
  },
  {
    image: 'checkOk.png',
    name: '간장 치킨',
    summary: '기본 메뉴 입니다.',
    date: '2021-01-01',
    price: 20000,
    sale: 0,
    hidden: false,
  },
  {
    image: '',
    name: '오븐 치킨',
    summary: '기본 메뉴 입니다.',
    date: '2021-01-01',
    price: 21000,
    sale: 10,
    hidden: false,
  },
]

export default function GoodsListTable() {
  return (
    <StyledTableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">NO</TableCell>
            <TableCell align="center">썸네일 이미지</TableCell>
            <TableCell align="center">메뉴명</TableCell>
            <TableCell align="center">간단 설명</TableCell>
            <TableCell align="center">가격</TableCell>
            <TableCell align="center">할인율</TableCell>
            <TableCell align="center">등록일</TableCell>
            <TableCell align="center">게시 상태</TableCell>
            <TableCell align="center">수정</TableCell>
            <TableCell align="center">삭제</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataList.map((data, idx) => (
            <GoodsListTbodyRow key={idx} seq={idx + 1} {...data} />
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  )
}
