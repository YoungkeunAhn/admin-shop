import { Box, IconButton, TableCell, TableRow } from "@material-ui/core"
import React from "react"
import BorderColorOutlinedIcon from "@material-ui/icons/BorderColorOutlined"
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined"
import useStyles from "./styles"

type Props = {
  seq: number
  image: string
  name: string
  summary: string
  price: number | null
  date: string
  onRemove: (name: string) => void
}

export default function GoodsListTbodyRow(props: Props) {
  const { seq, image, name, summary, price, date, onRemove } = props
  const classes = useStyles()

  return (
    <TableRow>
      <TableCell align="center">{seq}</TableCell>
      <TableCell align="center">
        <Box className={classes.imgBox}>
          <img
            src={image.length !== 0 ? `/${image}` : "/noImage.png"}
            alt="thumbnail image"
          />
        </Box>
      </TableCell>
      <TableCell align="center">{name}</TableCell>
      <TableCell align="center" style={{ minWidth: 200 }}>
        {summary}
      </TableCell>
      <TableCell align="center">{price}원</TableCell>
      <TableCell align="center">{date}</TableCell>
      <TableCell align="center">
        <IconButton size="small">
          <BorderColorOutlinedIcon fontSize="small" color="primary" />
        </IconButton>
      </TableCell>
      <TableCell align="center">
        <IconButton size="small" onClick={() => onRemove(name)}>
          <DeleteOutlinedIcon fontSize="small" />
        </IconButton>
      </TableCell>
    </TableRow>
  )
}
