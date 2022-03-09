import { Box, IconButton, TableCell, TableRow } from '@material-ui/core'
import React from 'react'
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'
import useStyles from './styles'
import Image from 'next/image'

type Props = {
  seq: number
  image: string
  name: string
  summary: string
  price: number | null
  sale: number | null
  date: string
  hidden: number
  onRemove: (name: string) => void
}

export default function GoodsListTbodyRow(props: Props) {
  const { seq, image, name, summary, price, sale, date, hidden, onRemove } =
    props
  const classes = useStyles()

  return (
    <TableRow>
      <TableCell align='center'>{seq}</TableCell>
      <TableCell align='center'>
        <Box className={classes.imgBox}>
          <Image
            src={image.length !== 0 ? `/${image}` : '/noImage.png'}
            alt='thumbnail image'
            width={100}
            height={100}
          />
        </Box>
      </TableCell>
      <TableCell align='center'>{name}</TableCell>
      <TableCell align='center' style={{ minWidth: 200 }}>
        {summary}
      </TableCell>
      <TableCell align='center'>{price}원</TableCell>
      <TableCell align='center'>{sale !== 0 ? `${sale}%` : '-'}</TableCell>
      <TableCell align='center'>{date}</TableCell>
      <TableCell align='center'>{hidden === 0 ? '숨김' : '게시중'}</TableCell>
      <TableCell align='center'>
        <IconButton size='small'>
          <BorderColorOutlinedIcon fontSize='small' color='primary' />
        </IconButton>
      </TableCell>
      <TableCell align='center'>
        <IconButton size='small' onClick={() => onRemove(name)}>
          <DeleteOutlinedIcon fontSize='small' />
        </IconButton>
      </TableCell>
    </TableRow>
  )
}
