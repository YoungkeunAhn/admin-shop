import { TableContainer } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'
type Props = {
  children: React.ReactChild
}
export default function StyledTableContainer(props: Props) {
  const { children } = props
  const classes = useStyles()

  return <TableContainer className={classes.root}>{children}</TableContainer>
}
