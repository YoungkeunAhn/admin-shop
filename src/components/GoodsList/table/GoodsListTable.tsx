import StyledTableContainer from '@/common/styled-table-container/StyledTableContainer'
import LocalStorage from '@/hooks/LocalStorage'
import { baseUrl } from '@/types/api'
import { GoodsDataType } from '@/types/enum'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import GoodsListTbodyRow from './tbody-row/GoodsListTbodyRow'

export default function GoodsListTable() {
  const [goodsList, setGoodsList] = useState<GoodsDataType[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const shopid = LocalStorage.getItem('shopid')

  const onRemoveGoods = (goodsname: string) => {
    if (confirm('삭제하시겠습니까?')) {
      setGoodsList(goodsList.filter((goods) => goods.goodsname !== goodsname))
    }
  }

  const goodsListLoad = async () => {
    setLoading(true)
    try {
      const { data } = await axios({
        url: 'apiv1/shop/setting/goodslist',
        baseURL: baseUrl,
        method: 'GET',
        params: { shopid: 'test' },
      })
      setGoodsList(data)
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    goodsListLoad()
  }, [goodsList])

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
            <TableCell align="center">수정</TableCell>
            <TableCell align="center">삭제</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {goodsList.map((data, idx) => (
            <GoodsListTbodyRow
              key={idx}
              seq={idx + 1}
              data={data}
              onRemove={onRemoveGoods}
            />
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  )
}
