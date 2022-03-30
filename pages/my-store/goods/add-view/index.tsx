import GoodsAddView from '@/features/GoodsAddView/GoodsAddView'
import MainLayout from '@/layouts/MainLayout'
import React from 'react'

export default function index() {
  return (
    <MainLayout title='메뉴 관리'>
      <GoodsAddView />
    </MainLayout>
  )
}
