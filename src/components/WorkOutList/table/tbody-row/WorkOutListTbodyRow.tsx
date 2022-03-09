import { TableCell, TableRow } from '@material-ui/core'
import React from 'react'
import { WorkOutTableDataType } from '../WorkOutListTable'
import useStyles from './styles'

type Props = {
  seq: number
  data: WorkOutTableDataType
}

export default function WorkOutListTbodyRow(props: Props) {
  const classes = useStyles()
  const { seq, data } = props
  const {
    id,
    dueDate,
    workOutDate,
    charge,
    amount,
    workOutType,
    bankName,
    bankOwnername,
    bankNum,
  } = data

  return (
    <TableRow className={classes.root}>
      <TableCell align="center">{seq}</TableCell>
      <TableCell align="center">{id}</TableCell>
      <TableCell align="center">{dueDate}</TableCell>
      <TableCell align="center">{workOutDate}</TableCell>
      <TableCell align="center">-{charge}원</TableCell>
      <TableCell align="center">+{amount}원</TableCell>
      <TableCell align="center">{workOutType}</TableCell>
      <TableCell align="center">{bankName}</TableCell>
      <TableCell align="center">{bankOwnername}</TableCell>
      <TableCell align="center">{bankNum}</TableCell>
    </TableRow>
  )
}
