import { IconButton, TableCell, TableRow } from '@material-ui/core'
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined'
import React from 'react'
import { NoticeDataType } from '../NoticeListTable'

type Props = {
  seq: number
  data: NoticeDataType
}

export default function NoticeListTbodyRow(props: Props) {
  const { seq, data } = props
  const { date, title, category, count } = data

  return (
    <TableRow>
      <TableCell align="center">{seq}</TableCell>
      <TableCell align="center">{date}</TableCell>
      <TableCell align="center">{category}</TableCell>
      <TableCell>{title}</TableCell>
      <TableCell align="center">
        <IconButton size="small">
          <DescriptionOutlinedIcon fontSize="small" color="primary" />
        </IconButton>
      </TableCell>
      <TableCell align="center">{count}</TableCell>
    </TableRow>
  )
}
