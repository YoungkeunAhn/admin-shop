import React from 'react'
import OrderHistorySearchBar from './searchBar/OrderHistorySearchBar'
import OrderHistoryTable from './table/OrderHistoryTable'

export default function OrderHistory() {
  return (
    <div>
      <OrderHistorySearchBar />
      <OrderHistoryTable />
    </div>
  )
}
