import PageHeader from '@/layouts/MainLayout/top-menu'
import React from 'react'
import OrderListSearchBar from './SearchBar/OrderListSearchBar'
import useStyles from './styles'
import OrderListTable from './table/OrderListTable'

export default function OrderListView() {
  const classes = useStyles()

  return (
    <div>
      <OrderListSearchBar />
      <OrderListTable />
    </div>
  )
}
