import OrderListView from '@/components/OrderListView/OrderListView'
import MainLayout from '@/layouts/MainLayout'
import React from 'react'

export default function list() {
  return (
    <MainLayout>
      <OrderListView />
    </MainLayout>
  )
}
