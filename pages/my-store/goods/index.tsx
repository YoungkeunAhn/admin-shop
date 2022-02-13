import GoodsList from '@/features/GoodsList/GoodsList'
import MainLayout from '@/layouts/MainLayout'
import React from 'react'

export default function index() {
  return (
    <MainLayout title="메뉴 관리">
      <GoodsList />
    </MainLayout>
  )
}
