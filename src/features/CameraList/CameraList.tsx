import CameraAddPaper from '@/components/CameraList/carmera-add-paper/CameraAddPaper'
import CameraListTable from '@/components/CameraList/table/CameraListTable'
import LocalStorage from '@/hooks/LocalStorage'
import { baseUrl } from '@/types/api'
import { CameraDataType } from '@/types/enum'
import { Box } from '@material-ui/core'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useState, useEffect, useCallback } from 'react'
import useStyles from './styles'

export default function CameraList() {
  const classes = useStyles()
  const [cameraList, setCameraList] = useState<CameraDataType[]>([])
  const shopid = LocalStorage.getItem('shopid')
  const [loading, setLoading] = useState<boolean>(false)

  const onCreateCamera = useCallback(async (data: CameraDataType) => {
    try {
      await axios({
        url: 'apiv1/shop/setting/cameramodify',
        baseURL: baseUrl,
        method: 'POST',
        data: JSON.stringify({
          shopid: 'test',
          cameraid: 0,
          cameraname: 'string',
          image: 'http://12.12.12.12/logo.jpg',
          macaddress: 'string',
          regdate: 'string',
          type: 'add/del/modify',
        }),
      })
    } catch (e) {
      console.error(e)
    }
  }, [])

  const cameraListLoad = async () => {
    setLoading(true)
    try {
      const { data } = await axios({
        url: 'apiv1/shop/setting/cameralist',
        baseURL: baseUrl,
        method: 'GET',
        params: { shopid: 'test' },
      })
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    cameraListLoad()
  }, [])
  return (
    <Box className={classes.root}>
      <CameraAddPaper onCreate={onCreateCamera} />
      <CameraListTable cameraList={cameraList} />
    </Box>
  )
}
