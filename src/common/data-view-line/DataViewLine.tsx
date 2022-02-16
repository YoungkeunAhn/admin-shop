import { Box, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'

type Props = {
  title: string
  value: string
}

export default function DataViewLine(props: Props) {
  const { title, value } = props
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Typography variant="body1" className={classes.title}>
        {title}
      </Typography>
      <Typography variant="body1">{value}</Typography>
    </Box>
  )
}
