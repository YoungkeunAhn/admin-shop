import { RealTimeOrderDataType } from "@/types/enum"
import {
  Box,
  Button,
  ButtonBase,
  TableCell,
  TableRow,
  Typography,
} from "@material-ui/core"
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined"
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined"
import ReportProblemOutlinedIcon from "@material-ui/icons/ReportProblemOutlined"
import ShoppingBasketOutlinedIcon from "@material-ui/icons/ShoppingBasketOutlined"
import React from "react"
import useStyles from "./styles"

type Props = {
  seq: number
  data: RealTimeOrderDataType
  openStateChnageDialog: (data: RealTimeOrderDataType) => void
  openLocationDialog: (data: RealTimeOrderDataType) => void
  openOrderInfoDialog: (data: RealTimeOrderDataType) => void
  openOrderReportDialog: (data: RealTimeOrderDataType) => void
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

  const stateColor = (stateValue: number): string => {
    switch (stateValue) {
      case 10:
        return "#dc0000"
      case 20:
        return "#55bd04"
      case 30:
        return "#32acf1"
      case 40:
        return "#9628ed"
      case 50:
        return "#1864ab"
      default:
        return ""
    }
  }

  const stateLabel = (stateValue: number): string => {
    switch (stateValue) {
      case 0:
        return "무효"
      case 10:
        return "주문접수"
      case 20:
        return "상품준비완료"
      case 30:
        return "DT진입"
      case 40:
        return "상품수령"
      case 50:
        return "완료"
      case 60:
        return "취소"
      default:
        return "error"
    }
  }

  return (
    <TableRow className={classes.root}>
      <TableCell align="center">{seq}</TableCell>
      <TableCell align="center" className={classes.nowrap}>
        {data.orderid}
      </TableCell>
      <TableCell align="center">{data.dateorder}</TableCell>
      <TableCell align="center">{data.username}</TableCell>
      <TableCell align="center" className={classes.nowrap}>
        {data.carnum}
      </TableCell>
      <TableCell align="center">{data.price}</TableCell>
      <TableCell style={{ minWidth: 200 }}>
        {data.goodslist.map(
          (goods, idx) =>
            `${goods.goodsid}(${goods.amount})
            ${data.goodslist.length - 1 !== idx ? "," : ""}
            `
        )}
      </TableCell>
      <TableCell>
        <Box display="flex" alignItems="center">
          <div
            style={{
              borderRadius: "100%",
              background: stateColor(data.orderstate),
              width: 10,
              height: 10,
              marginRight: 8,
            }}
          ></div>
          <Typography variant="body2">{stateLabel(data.orderstate)}</Typography>
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
