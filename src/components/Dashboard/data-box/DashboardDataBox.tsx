import { Box, ButtonBase, Divider, Typography } from "@material-ui/core"
import React from "react"
import useStyles from "./styles"
import ChevronRightIcon from "@material-ui/icons/ChevronRight"
import { useRouter } from "next/router"

type Props = {
  title: string
  url: string
  mainData: { title: string; data: string; total?: number }
  subDataList: Array<{ title: string; data: string }>
  color: string
}

export default function DashboardDataBox(props: Props) {
  const { title, url, mainData, subDataList, color } = props
  const styledProps = { color: color }
  const classes = useStyles(styledProps)
  const router = useRouter()

  return (
    <Box className={classes.root}>
      <Box className={classes.titleBox}>
        <Typography variant="body1">{title}</Typography>
        <ButtonBase onClick={() => router.push(url)}>
          <Box display="flex" alignItems="center">
            <Typography variant="body2">바로가기</Typography>
            <ChevronRightIcon fontSize="small" />
          </Box>
        </ButtonBase>
      </Box>
      <Box className={classes.mainBox}>
        <Typography variant="body2">{mainData.title}</Typography>
        <Typography variant="body1" style={{ color }}>
          {mainData.data}
        </Typography>
        {mainData.total && (
          <Box className={classes.totalBox}>
            <Typography variant="body2">Total</Typography>
            <Divider orientation="vertical" flexItem />
            <Typography variant="body2" style={{ color }}>
              {mainData.total}
            </Typography>
          </Box>
        )}
      </Box>
      {subDataList.map((subData, idx) => (
        <Box className={classes.subBox} key={idx}>
          <Typography variant="body2">{subData.title}</Typography>
          <Typography variant="body2" style={{ color }}>
            {subData.data}
          </Typography>
        </Box>
      ))}
    </Box>
  )
}
