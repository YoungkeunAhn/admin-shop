import { IconButton, TableCell, TableRow } from "@material-ui/core"
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined"
import React from "react"
import { HistoryDataType } from "../OrderHistoryTable"

type Props = {
  seq: number
  data: HistoryDataType
  openDetailInfoDialog: (data: HistoryDataType) => void
}

export default function OrderHistoryTbodyRow(props: Props) {
  const { seq, data, openDetailInfoDialog } = props

  return (
    <TableRow>
      <TableCell align="center">{seq}</TableCell>
      <TableCell align="center">{data.ordernum}</TableCell>
      <TableCell align="center">{data.nickname}</TableCell>
      <TableCell align="center">{data.date}</TableCell>
      <TableCell align="center">{data.time}</TableCell>
      <TableCell align="center">{data.pickupTime}</TableCell>
      <TableCell align="center">{data.carnum}</TableCell>
      <TableCell align="center">{data.state}</TableCell>
      <TableCell align="center">{data.price}</TableCell>
      <TableCell align="center">{data.result}</TableCell>
      <TableCell align="center">
        <IconButton size="small" onClick={() => openDetailInfoDialog(data)}>
          <DescriptionOutlinedIcon fontSize="small" color="primary" />
        </IconButton>
      </TableCell>
    </TableRow>
  )
}
