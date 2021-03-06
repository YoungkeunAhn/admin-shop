import CameraList from '@/features/CameraList/CameraList'
import MainLayout from '@/layouts/MainLayout'
import React from 'react'

export default function index() {
  return (
    <MainLayout title="카메라 목록">
      <CameraList />
    </MainLayout>
  )
}
