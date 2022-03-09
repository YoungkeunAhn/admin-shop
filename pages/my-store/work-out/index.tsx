import WorkOutList from '@/features/WorkOutList/WorkOutList'
import MainLayout from '@/layouts/MainLayout'
import React from 'react'

export default function index() {
  return (
    <MainLayout title="정산 관리">
      <WorkOutList />
    </MainLayout>
  )
}
