import React from "react"
import OrderListSearchBar from "@/components/OrderList/search-bar/OrderListSearchBar"
import useStyles from "./styles"
import OrderListTable from "@/components/OrderList/table/OrderListTable"

export default function OrderListView() {
  const classes = useStyles()

  return (
    <div>
      <OrderListSearchBar />
      <OrderListTable />
    </div>
  )
}
