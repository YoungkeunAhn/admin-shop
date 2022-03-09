import MyStoreInfo from '@/features/MyStoreInfo/MyStoreInfo'
import MainLayout from '@/layouts/MainLayout'
import React from 'react'

export default function index() {
  return (
    <MainLayout title="지점 정보 수정">
      <MyStoreInfo />
    </MainLayout>
  )
}
