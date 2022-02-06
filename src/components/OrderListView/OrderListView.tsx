import PageHeader from '@/layouts/PageHeader'
import React from 'react'
import OrderListTable from './table/OrderListTable'

export default function OrderListView() {
  return (
    <>
      <PageHeader title='실시간 주문 현황' />
      <OrderListTable />
    </>
  )
}
