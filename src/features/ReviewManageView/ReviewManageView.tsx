import React from 'react'
import ReviewManageSearchBar from './searchBar/ReviewManageSearchBar'
import ReviewManageTable from './table/ReviewManageTable'

export default function ReviewManageView() {
  return (
    <div>
      <ReviewManageSearchBar />
      <ReviewManageTable />
    </div>
  )
}
