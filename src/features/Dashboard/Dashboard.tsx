import ChartBox from "@/components/Dashboard/chart-box/ChartBox"
import DashboardDataBox from "@/components/Dashboard/data-box/DashboardDataBox"
import { Box } from "@material-ui/core"
import React from "react"

type DataType = {
  title: string
  url: string
  mainData: { title: string; data: string; total?: number }
  subDataList: Array<{ title: string; data: string }>
  color: string
}

const firstData: DataType = {
  title: "실시간 주문 현황",
  url: "/order/list",
  mainData: { title: "어제 주문 현황", data: "120 건", total: 5420 },
  subDataList: [
    { title: "주문접수", data: "120 건" },
    { title: "상품준비 완료", data: "120 건" },
    { title: "수령완료", data: "120 건" },
  ],
  color: "#3266F1",
}

const secondData: DataType = {
  title: "정산 관리",
  url: "/my-store/work-out",
  mainData: { title: "어제 결제 총액", data: "5,543,300 원" },
  subDataList: [
    { title: "오늘 결제 총액", data: "5,342,120 원" },
    { title: "상품준비 완료", data: "5,342,120 원" },
    { title: "수령 완료", data: "5,342,120 원" },
  ],
  color: "#F09000",
}

export default function Dashboard() {
  return (
    <Box>
      <Box display="flex" justifyContent="space-between">
        <DashboardDataBox {...firstData} />
        <DashboardDataBox {...secondData} />
      </Box>
      <Box display="flex" justifyContent="space-between" mt={3}>
        <ChartBox title="주문현황 그래프" />
        <ChartBox title="매출현황 그래프" />
      </Box>
    </Box>
  )
}
