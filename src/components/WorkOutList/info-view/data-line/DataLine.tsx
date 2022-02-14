import theme from '@/themes/theme'
import { Box, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'

type Props = {
  title: string
  data: string
  color?: 'primary'
}

export default function DataLine(props: Props) {
  const { title, data, color } = props
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Typography variant="body1">{title}</Typography>
      <Typography variant="body1" className={color ? classes.color : undefined}>
        {data}
      </Typography>
    </Box>
  )
}
