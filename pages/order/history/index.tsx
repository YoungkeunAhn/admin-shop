import OrderHistoryView from '@/features/OrderHistoryView/OrderHistoryView'
import MainLayout from '@/layouts/MainLayout'
import React from 'react'

export default function index() {
  return (
    <MainLayout title='주문 목록'>
      <OrderHistoryView />
    </MainLayout>
  )
}
