import { Box, IconButton, TableCell, TableRow } from "@material-ui/core"
import React from "react"
import BorderColorOutlinedIcon from "@material-ui/icons/BorderColorOutlined"
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined"
import useStyles from "./styles"
import Image from "next/image"
import { GoodsDataType } from "@/types/enum"

type Props = {
  seq: number
  data: GoodsDataType
  onRemove: (name: string) => void
}

export default function GoodsListTbodyRow(props: Props) {
  const { seq, data, onRemove } = props
  const classes = useStyles()

  return (
    <TableRow>
      <TableCell align="center">{seq}</TableCell>
      <TableCell align="center">
        <Box className={classes.imgBox}>
          <Image
            src={data.image.length !== 0 ? `/${data.image}` : "/noImage.png"}
            alt="thumbnail image"
            width={100}
            height={100}
          />
        </Box>
      </TableCell>
      <TableCell align="center">{data.goodsname}</TableCell>
      <TableCell align="center" style={{ minWidth: 200 }}>
        {data.summary}
      </TableCell>
      <TableCell align="center">{data.price}원</TableCell>
      <TableCell align="center">
        <IconButton size="small">
          <BorderColorOutlinedIcon fontSize="small" color="primary" />
        </IconButton>
      </TableCell>
      <TableCell align="center">
        <IconButton size="small" onClick={() => onRemove(data.goodsname)}>
          <DeleteOutlinedIcon fontSize="small" />
        </IconButton>
      </TableCell>
    </TableRow>
  )
}
