import React from 'react'
import OrderHistorySearchBar from './searchBar/OrderHistorySearchBar'
import OrderHistoryTable from './table/OrderHistoryTable'

export default function OrderHistoryView() {
  return (
    <div>
      <OrderHistorySearchBar />
      <OrderHistoryTable />
    </div>
  )
}