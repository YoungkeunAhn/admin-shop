import React from 'react'
import OrderHistorySearchBar from '@/components/OrderHistory/search-bar/OrderHistorySearchBar'
import OrderHistoryTable from '@/components/OrderHistory/table/OrderHistoryTable'

export default function OrderHistory() {
  return (
    <div>
      <OrderHistorySearchBar />
      <OrderHistoryTable />
    </div>
  )
}
