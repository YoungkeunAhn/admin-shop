import OrderListView from '@/features/OrderListView/OrderListView'
import MainLayout from '@/layouts/MainLayout'
import React from 'react'

export default function list() {
  return (
    <MainLayout title='실시간 주문 현황'>
      <OrderListView />
    </MainLayout>
  )
}
