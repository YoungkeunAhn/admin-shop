import StyledTableContainer from "@/common/styled-table-container/StyledTableContainer"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@material-ui/core"
import React, { useState } from "react"
import GoodsListTbodyRow from "./tbody-row/GoodsListTbodyRow"

export type GoodsDataType = {
  image: string
  name: string
  summary: string
  price: number | null
  date: string
}

export const goodsList: GoodsDataType[] = [
  {
    image: "original_chicken.jpg",
    name: "오리지널 치킨",
    summary: "기본 메뉴 입니다.",
    date: "2021-01-01",
    price: 19000,
  },
  {
    image: "source_chicken.png",
    name: "양념 치킨",
    summary: "기본 메뉴 입니다.",
    date: "2021-01-01",
    price: 20000,
  },
  {
    image: "ganjang_chicken.jpg",
    name: "간장 치킨",
    summary: "기본 메뉴 입니다.",
    date: "2021-01-01",
    price: 20000,
  },
  {
    image: "oven_chicken.jpg",
    name: "오븐 치킨",
    summary: "기본 메뉴 입니다.",
    date: "2021-01-01",
    price: 21000,
  },
]

export default function GoodsListTable() {
  const [menuList, setMenuList] = useState<GoodsDataType[]>(goodsList)

  const onRemoveGoods = (name: string) => {
    if (confirm("삭제하시겠습니까?")) {
      setMenuList(menuList.filter((goods) => goods.name !== name))
    }
  }
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
            <TableCell align="center">등록일</TableCell>
            <TableCell align="center">수정</TableCell>
            <TableCell align="center">삭제</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {menuList.map((data, idx) => (
            <GoodsListTbodyRow
              key={idx}
              seq={idx + 1}
              {...data}
              onRemove={onRemoveGoods}
            />
          ))}
        </TableBody>
      </Table>
    </StyledTableContainer>
  )
}
