import { IconButton, TableCell, TableRow } from '@material-ui/core'
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined'
import React from 'react'

type Props = {
  seq: number
  ordernum: string
  nickname: string
  date: string
  time: string
  pickupTime: string
  carnum: string
  state: string
  price: string
  result: string
}

export default function OrderHistoryTbodyRow(props: Props) {
  const {
    seq,
    ordernum,
    nickname,
    date,
    time,
    pickupTime,
    carnum,
    state,
    price,
    result,
  } = props

  return (
    <TableRow>
      <TableCell align='center'>{seq}</TableCell>
      <TableCell align='center'>{ordernum}</TableCell>
      <TableCell align='center'>{nickname}</TableCell>
      <TableCell align='center'>{date}</TableCell>
      <TableCell align='center'>{time}</TableCell>
      <TableCell align='center'>{pickupTime}</TableCell>
      <TableCell align='center'>{carnum}</TableCell>
      <TableCell align='center'>{state}</TableCell>
      <TableCell align='center'>{price}</TableCell>
      <TableCell align='center'>{result}</TableCell>
      <TableCell align='center'>
        <IconButton size='small'>
          <DescriptionOutlinedIcon fontSize='small' color='primary' />
        </IconButton>
      </TableCell>
    </TableRow>
  )
}
