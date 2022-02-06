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
import useStyles from './styles'

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
  const classes = useStyles()

  return (
    <TableRow className={classes.root}>
      <TableCell align='center'>{seq}</TableCell>
      <TableCell align='center' className={classes.nowrap}>
        {id}
      </TableCell>
      <TableCell align='center'>{time}</TableCell>
      <TableCell align='center'>{nickname}</TableCell>
      <TableCell align='center' className={classes.nowrap}>
        {carNum}
      </TableCell>
      <TableCell align='center'>{price}</TableCell>
      <TableCell style={{ minWidth: 200 }}>
        {goodsList.map(
          (goods, idx) =>
            `${goods.goodsId}(${goods.amount})
            ${goodsList.length - 1 !== idx ? ',' : ''}
            `
        )}
      </TableCell>
      <TableCell>{state}</TableCell>
      <TableCell align='center'>
        <Button
          size='small'
          endIcon={<ShoppingBasketOutlinedIcon fontSize='small' />}
          // variant='contained'
          className={classes.stateChangeBtn}
        >
          상태변경
        </Button>
      </TableCell>
      <TableCell align='center'>
        <ButtonBase color='primary'>
          <LocationOnOutlinedIcon fontSize='small' />
        </ButtonBase>
      </TableCell>
      <TableCell align='center'>
        <ButtonBase color='primary'>
          <AccountBalanceWalletOutlinedIcon fontSize='small' />
        </ButtonBase>
      </TableCell>
      <TableCell align='center'>
        <ButtonBase color='primary'>
          <ReportProblemOutlinedIcon fontSize='small' />
        </ButtonBase>
      </TableCell>
    </TableRow>
  )
}
