import QnaLIst from '@/features/QnaLIst/QnaLIst'
import MainLayout from '@/layouts/MainLayout'
import React from 'react'

export default function index() {
  return (
    <MainLayout title="문의하기">
      <QnaLIst />
    </MainLayout>
  )
}
