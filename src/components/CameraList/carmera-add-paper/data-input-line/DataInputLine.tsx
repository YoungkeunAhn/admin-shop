import { Box, TextField, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'

type Props = {
  title: string
  name: string
  value: string
  placeholder: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function DataInputLine(props: Props) {
  const { title, name, value, placeholder, onChange } = props
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Typography>{title}</Typography>
      <TextField
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        variant="outlined"
        size="small"
        fullWidth
      />
    </Box>
  )
}
