import { Box, TextField, Typography } from '@material-ui/core'
import React from 'react'
import useStyles from './styles'

type Props = {
  label: string
  name: string
  value: string | number | boolean | null
  onChange: (evnet: React.ChangeEvent<HTMLInputElement>) => void

  type?: 'password'
  require?: true
  noInput?: true
  children?: React.ReactChild
  disabled?: boolean
}

export default function SignUpDataFiled(props: Props) {
  const {
    label,
    name,
    value,
    type,
    require,
    noInput,
    children,
    disabled,
    onChange,
  } = props
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Box className={classes.label}>
        <Typography variant='body2'>{label}</Typography>
        {require && <span className={classes.require}>*</span>}
      </Box>
      {!noInput ? (
        <TextField
          type={type}
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
