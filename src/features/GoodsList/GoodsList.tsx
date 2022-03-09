import React from 'react'
import GoodsListSearchBar from '@/components/GoodsList/searh-bar/GoodsListSearchBar'
import GoodsListTable from '@/components/GoodsList/table/GoodsListTable'

export default function GoodsList() {
  return (
    <>
      <GoodsListSearchBar />
      <GoodsListTable />
    </>
  )
}
