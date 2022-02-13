import MyStore from '@/features/MyStore/MyStore'
import MainLayout from '@/layouts/MainLayout'
import React from 'react'

export default function index() {
  return (
    <MainLayout title="지점 정보 수정">
      <MyStore />
    </MainLayout>
  )
}
