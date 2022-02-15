import {
  Box,
  Collapse,
  IconButton,
  TableCell,
  TableRow,
} from '@material-ui/core'
import React from 'react'
import KeyboardArrowUpOutlinedIcon from '@material-ui/icons/KeyboardArrowUpOutlined'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined'
import { QnaDataType } from '../QnaListTable'

type Props = {
  seq: number
  data: QnaDataType
  expand: boolean
}

export default function QnaListTbodyRow(props: Props) {
  const { seq, data, expand } = props
  const { date, type, reply, title } = data

  return (
    <>
      <TableRow>
        <TableCell align="center">{seq}</TableCell>
        <TableCell align="center">{date}</TableCell>
        <TableCell align="center">{type}</TableCell>
        <TableCell align="center">
          {reply.length !== 0 ? '답변 완료' : '미답변'}
        </TableCell>
        <TableCell style={{ minWidth: 400 }}>{title}</TableCell>
        <TableCell>
          {expand ? (
            <IconButton size="small">
              <ExpandMoreOutlinedIcon fontSize="small" />
            </IconButton>
          ) : (
            <IconButton size="small">
              <KeyboardArrowUpOutlinedIcon fontSize="small" />
            </IconButton>
          )}
        </TableCell>
      </TableRow>
      <Collapse in={expand}>
        <Box p={3} border={'1px solid black'}>
          {reply}
        </Box>
      </Collapse>
    </>
  )
}
