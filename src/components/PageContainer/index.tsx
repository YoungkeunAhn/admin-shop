import { Container } from '@material-ui/core'
import React from 'react'

type Props = {
  children: React.ReactChild
}
export default function PageContainer(props: Props) {
  const { children } = props
  return <Container maxWidth='lg'>{children}</Container>
}
