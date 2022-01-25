import { Box, TextField, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'

type Props = {
  label: string
  name: string
  value: string | number | null
  onChange: (evnet: React.ChangeEvent<HTMLInputElement>) => void

  require?: true
  noInput?: false
  children?: React.ReactChild
  disabled?: boolean
}

export default function SignUpDataFiled(props: Props) {
  const { label, require, noInput, children, name, value, disabled, onChange } =
    props
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Typography className={classes.label} variant='body2'>
        {label}
      </Typography>
      {require && <span style={{ color: '#EEBA00' }}>*</span>}
      {!noInput ? (
        <TextField
          className={classes.input}
          variant='outlined'
          size='small'
          disabled={disabled}
          name={name}
          value={value}
          onChange={onChange}
        />
      ) : (
        children
      )}
    </Box>
  )
}
