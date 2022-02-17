import Dashboard from '@/features/Dashboard/Dashboard'
import MainLayout from '@/layouts/MainLayout'
import PageHeader from '@/layouts/MainLayout/top-menu'
import React from 'react'

export default function DashboardPage() {
  return (
    <MainLayout title="대시보드">
      <Dashboard />
    </MainLayout>
  )
}
