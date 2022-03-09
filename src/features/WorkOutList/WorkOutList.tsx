import InfoView from '@/components/WorkOutList/info-view/InfoView'
import WorkOutListSearchBar from '@/components/WorkOutList/search-bar/WorkOutListSearchBar'
import WorkOutListTable from '@/components/WorkOutList/table/WorkOutListTable'
import React from 'react'

export default function WorkOutList() {
  return (
    <>
      <InfoView />
      <WorkOutListSearchBar />
      <WorkOutListTable />
    </>
  )
}
