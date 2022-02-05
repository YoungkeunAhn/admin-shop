import {
  Button,
  ButtonBase,
  TableCell,
  TableRow,
  Typography,
} from '@material-ui/core'
import React from 'react'
import ShoppingBasketOutlinedIcon from '@material-ui/icons/ShoppingBasketOutlined'
import LocationOnOutlinedIcon from '@material-ui/icons/LocationOnOutlined'
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined'
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined'

type Props = {
  seq: number
  id: string
  time: string
  nickname: string
  carNum: string
  price: number
  goodsList: Array<{ amount: number; goodsId: string }>
  state: number
}

export default function OrderListTableRow(props: Props) {
  const { seq, id, time, nickname, carNum, price, goodsList, state } = props
  return (
    <TableRow>
      <TableCell>{seq}</TableCell>
      <TableCell>{id}</TableCell>
      <TableCell>{time}</TableCell>
      <TableCell>{nickname}</TableCell>
      <TableCell>{carNum}</TableCell>
      <TableCell>{price}</TableCell>
      <TableCell>
        {goodsList.map(
          (goods, idx) =>
            `${goods.goodsId}(${goods.amount})
            ${goodsList.length !== idx - 1 ? ',' : null}
            `
        )}
      </TableCell>
      <TableCell>{state}</TableCell>
      <TableCell>
        <Button
          endIcon={<ShoppingBasketOutlinedIcon fontSize='small' />}
          color='default'
          variant='contained'
        >
          상태변경
        </Button>
      </TableCell>
      <TableCell>
        <ButtonBase>
          <LocationOnOutlinedIcon fontSize='small' />
        </ButtonBase>
      </TableCell>
      <TableCell>
        <ButtonBase>
          <AccountBalanceWalletOutlinedIcon fontSize='small' />
        </ButtonBase>
      </TableCell>
      <TableCell>
        <ButtonBase>
          <ReportProblemOutlinedIcon fontSize='small' />
        </ButtonBase>
      </TableCell>
    </TableRow>
  )
}
