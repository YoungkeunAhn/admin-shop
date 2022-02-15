import NoticeList from '@/features/NoticeList/NoticeList'
import MainLayout from '@/layouts/MainLayout'
import React from 'react'

export default function index() {
  return (
    <MainLayout title="공지사항">
      <NoticeList />
    </MainLayout>
  )
}
