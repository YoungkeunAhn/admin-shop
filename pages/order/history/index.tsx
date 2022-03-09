import OrderHistory from '@/features/OrderHistory/OrderHistory'
import MainLayout from '@/layouts/MainLayout'
import React from 'react'

export default function index() {
  return (
    <MainLayout title="주문 목록">
      <OrderHistory />
    </MainLayout>
  )
}
