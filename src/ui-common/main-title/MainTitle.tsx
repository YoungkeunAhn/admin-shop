import { Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'

type Props = {
  titleSize: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
}

export default function MainTitle(props: Props) {
  const { titleSize } = props
  const classes = useStyles()

  return (
    <Typography className={classes.title} variant={titleSize}>
      INCAPPAY
    </Typography>
  )
}
