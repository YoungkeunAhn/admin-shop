import ReviewManageView from '@/features/ReviewManageView/ReviewManageView'
import MainLayout from '@/layouts/MainLayout'
import React from 'react'

export default function index() {
  return (
    <MainLayout title='리뷰 관리'>
      <ReviewManageView />
    </MainLayout>
  )
}
