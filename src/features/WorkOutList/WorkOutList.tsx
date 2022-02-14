import InfoView from '@/components/WorkOutList/info-view/InfoView'
import React from 'react'
import WorkOutListSearchBar from './searchBar/WorkOutListSearchBar'
import WorkOutListTable from './table/WorkOutListTable'

export default function WorkOutList() {
  return (
    <>
      <InfoView />
      <WorkOutListSearchBar />
      <WorkOutListTable />
    </>
  )
}
