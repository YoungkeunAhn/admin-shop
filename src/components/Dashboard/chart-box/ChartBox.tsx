import { Box, Button, Paper, Typography } from '@material-ui/core'
import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js'
import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'
import useStyles from './styles'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
}

const createLables = () => {
  const returnValue = []
  for (let i = 1; i < 13; i++) {
    returnValue.push(`${i}월`)
  }
  return returnValue
}

const randomData = () => {
  const dataList = []
  for (let i = 0; i < 12; i++) {
    dataList.push(Math.floor(Math.random() * 100))
  }

  return dataList
}

const data = {
  labels: createLables(),
  datasets: [
    {
      label: '주문접수',
      data: randomData(),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: '주문취소',
      data: randomData(),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
}

type Props = {
  title: string
}

export default function ChartBox(props: Props) {
  const classes = useStyles()
  const { title } = props
  const [activeBtn, setActiveBtn] = useState<string>('month')

  return (
    <Paper className={classes.root}>
      <Box className={classes.headerBox}>
        <Typography variant="h6">{title}</Typography>
        <Box className={classes.btnBox}>
          <Button
            size="small"
            variant="contained"
            color={activeBtn === 'day' ? 'primary' : 'default'}
            onClick={() => setActiveBtn('day')}
          >
            일
          </Button>
          <Button
            size="small"
            variant="contained"
            color={activeBtn === 'month' ? 'primary' : 'default'}
            onClick={() => setActiveBtn('month')}
          >
            월
          </Button>
          <Button
            size="small"
            variant="contained"
            color={activeBtn === 'year' ? 'primary' : 'default'}
            onClick={() => setActiveBtn('year')}
          >
            년
          </Button>
        </Box>
      </Box>
      <Line options={options} data={data} height={100} />
    </Paper>
  )
}
