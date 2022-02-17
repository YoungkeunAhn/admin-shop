import {
  Box,
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
import { DialogType, OrderInfoType } from '../OrderListTable'

type Props = {
  seq: number
  data: OrderInfoType
  openStateChnageDialog: (data: OrderInfoType) => void
  openLocationDialog: (data: OrderInfoType) => void
  openOrderInfoDialog: (data: OrderInfoType) => void
  openOrderReportDialog: (data: OrderInfoType) => void
}

export default function OrderListTableRow(props: Props) {
  const {
    seq,
    data,
    openStateChnageDialog,
    openLocationDialog,
    openOrderInfoDialog,
    openOrderReportDialog,
  } = props
  const classes = useStyles()

  return (
    <TableRow className={classes.root}>
      <TableCell align="center">{seq}</TableCell>
      <TableCell align="center" className={classes.nowrap}>
        {data.ordernum}
      </TableCell>
      <TableCell align="center">{data.time}</TableCell>
      <TableCell align="center">{data.nickname}</TableCell>
      <TableCell align="center" className={classes.nowrap}>
        {data.carNum}
      </TableCell>
      <TableCell align="center">{data.price}</TableCell>
      <TableCell style={{ minWidth: 200 }}>
        {data.goodsList.map(
          (goods, idx) =>
            `${goods.goodsId}(${goods.amount})
            ${data.goodsList.length - 1 !== idx ? ',' : ''}
            `
        )}
      </TableCell>
      <TableCell>
        <Box display="flex" alignItems="center">
          <div
            style={{
              borderRadius: '100%',
              background: data.state.color,
              width: 10,
              height: 10,
              marginRight: 8,
            }}
          ></div>
          <Typography variant="body2">{data.state.label}</Typography>
        </Box>
      </TableCell>
      <TableCell align="center">
        <Button
          size="small"
          endIcon={<ShoppingBasketOutlinedIcon fontSize="small" />}
          className={classes.stateChangeBtn}
          onClick={() => openStateChnageDialog(data)}
        >
          상태변경
        </Button>
      </TableCell>
      <TableCell align="center">
        <ButtonBase color="primary" onClick={() => openLocationDialog(data)}>
          <LocationOnOutlinedIcon fontSize="small" />
        </ButtonBase>
      </TableCell>
      <TableCell align="center">
        <ButtonBase color="primary" onClick={() => openOrderInfoDialog(data)}>
          <AccountBalanceWalletOutlinedIcon fontSize="small" />
        </ButtonBase>
      </TableCell>
      <TableCell align="center">
        <ButtonBase color="primary" onClick={() => openOrderReportDialog(data)}>
          <ReportProblemOutlinedIcon fontSize="small" />
        </ButtonBase>
      </TableCell>
    </TableRow>
  )
}
