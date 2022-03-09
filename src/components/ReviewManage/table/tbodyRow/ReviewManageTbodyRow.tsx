import {
  ButtonBase,
  IconButton,
  TableCell,
  TableRow,
  Typography,
} from '@material-ui/core'
import React from 'react'
import ReportProblemOutlinedIcon from '@material-ui/icons/ReportProblemOutlined'

type Props = {
  seq: number
  ordernum: string
  date: string
  nickname: string
  score: number
  content: string
  hasReply: boolean
  hasReport: boolean
}

export default function ReviewManageTbodyRow(props: Props) {
  const { seq, ordernum, date, nickname, score, content, hasReply, hasReport } =
    props
  return (
    <TableRow>
      <TableCell align='center'>{seq}</TableCell>
      <TableCell align='center'>{ordernum}</TableCell>
      <TableCell align='center'>{date}</TableCell>
      <TableCell align='center'>{nickname}</TableCell>
      <TableCell align='center'>{score}점</TableCell>
      <TableCell style={{ width: 400 }}>{content}</TableCell>
      <TableCell align='center'>
        {hasReply ? (
          <ButtonBase>
            <Typography>대기중</Typography>
          </ButtonBase>
        ) : (
          <ButtonBase>
            <Typography>완료</Typography>
          </ButtonBase>
        )}
      </TableCell>
      <TableCell align='center'>
        <IconButton size='small'>
          <ReportProblemOutlinedIcon
            fontSize='small'
            color={hasReport ? 'secondary' : 'disabled'}
          />
        </IconButton>
      </TableCell>
    </TableRow>
  )
}
