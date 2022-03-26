import StyledTableContainer from '@/common/styled-table-container/StyledTableContainer'
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
import NoticeListTbodyRow from './tbody-row/NoticeListTbodyRow'

export type NoticeDataType = {
  date: string
  category: string
  title: string
  count: number
}

const randomCount = (): number => {
  return Math.floor(Math.random() * 1000 + 1)
}

const dataList: NoticeDataType[] = [
  {
    date: '2021-01-01',
    category: '시스템',
    title: '시스템 업데이트 안내 드립니다.',
    count: randomCount(),
  },
  {
    date: '2021-01-01',
    category: '이벤트',
    title: '크리스마스 기념 수수료 이벤트',
    count: randomCount(),
  },
  {
    date: '2021-01-01',
    category: '안내',
    title: '신규 기능 사용안내',
    count: randomCount(),
  },
  {
    date: '2021-01-01',
    category: '이벤트',
    title: '크리스마스 기념 수수료 이벤트',
    count: randomCount(),
  },
  {
    date: '2021-01-01',
    category: '시스템',
    title: '시스템 업데이트 안내 드립니다.',
    count: randomCount(),
  },
]

export default function NoticeListTable() {
  const [loading, setLoading] = useState<boolean>(false)

  const noticeLoad = async () => {
    setLoading(true)
    try {
      const { data } = await axios({
        url: 'apiv1/shop/login/notice',
        baseURL: baseUrl,
        method: 'GET',
      })
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    noticeLoad()
  }, [])
  return (
    <StyledTableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">NO</TableCell>
            <TableCell align="center">등록 일자</TableCell>
            <TableCell align="center">카테고리</TableCell>
            <TableCell align="center">제목</TableCell>
            <TableCell align="center">내용보기</TableCell>
            <TableCell align="center">조회수</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dataList.map((data, idx) => (
            <NoticeListTbodyRow key={idx} seq={idx + 1} data={data} />
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  )
}
