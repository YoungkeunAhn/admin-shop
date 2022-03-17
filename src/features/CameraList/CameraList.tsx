import CameraAddPaper from "@/components/CameraList/carmera-add-paper/CameraAddPaper"
import CameraListTable from "@/components/CameraList/table/CameraListTable"
import LocalStorage from "@/hooks/LocalStorage"
import { baseUrl } from "@/types/api"
import { CameraDataType } from "@/types/enum"
import { Box } from "@material-ui/core"
import axios from "axios"
import React, { useState, useEffect } from "react"
import useStyles from "./styles"

export default function CameraList() {
  const classes = useStyles()
  const [cameraList, setCameraList] = useState<CameraDataType[]>([])
  const shopid = LocalStorage.getItem("shopid")
  const [loading, setLoading] = useState<boolean>(false)

  const onCreateCamera = (data: CameraDataType) => {
    setCameraList(cameraList.concat(data))
  }

  const cameraListLoad = async () => {
    setLoading(true)
    try {
      const { data } = await axios.get(
        baseUrl + "​apiv1​/shop​/setting​/cameralist"
      )
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (shopid) {
      cameraListLoad()
    }
  }, [])
  return (
    <Box className={classes.root}>
      <CameraAddPaper onCreate={onCreateCamera} />
      <CameraListTable cameraList={cameraList} />
    </Box>
  )
}
