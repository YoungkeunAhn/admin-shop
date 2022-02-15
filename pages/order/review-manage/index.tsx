import ReviewManage from '@/features/ReviewManage/ReviewManage'
import MainLayout from '@/layouts/MainLayout'
import React from 'react'

export default function index() {
  return (
    <MainLayout title="리뷰 관리">
      <ReviewManage />
    </MainLayout>
  )
}
