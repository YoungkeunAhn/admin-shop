import { CameraDataType } from '@/features/CameraList/CameraList'
import { Box, IconButton, TableCell, TableRow } from '@material-ui/core'
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined'
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined'
import Image from 'next/image'
import React from 'react'
import useStyles from './styles'

type Props = {
  seq: number
  data: CameraDataType
}

export default function CameraListTbodyRow(props: Props) {
  const { seq, data } = props
  const { image, name, mac, location, date } = data
  const classes = useStyles()

  return (
    <TableRow>
      <TableCell align='center'>{seq}</TableCell>
      <TableCell align='center'>
        <Box className={classes.imgBox}>
          <Image
            src={image.length !== 0 ? `/${image}` : '/noImage.png'}
            alt='thumbnail image'
            width={150}
            height={100}
          />
        </Box>
      </TableCell>
      <TableCell align='center'>{name}</TableCell>
      <TableCell align='center'>{mac}</TableCell>
      <TableCell align='center'>{location}</TableCell>
      <TableCell align='center'>{date}</TableCell>
      <TableCell align='center'>
        <IconButton size='small'>
          <BorderColorOutlinedIcon fontSize='small' color='primary' />
        </IconButton>
      </TableCell>
      <TableCell align='center'>
        <IconButton size='small'>
          <DeleteOutlinedIcon fontSize='small' />
        </IconButton>
      </TableCell>
    </TableRow>
  )
}
