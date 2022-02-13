import { Box, TextField, Typography } from '@material-ui/core'
import clsx from 'clsx'
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
  disabled?: true
}

export default function DataInputForm(props: Props) {
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
      <Box className={classes.labelBox}>
        <Typography variant="body2" className={classes.label}>
          {label}
        </Typography>
        {require && <span className={classes.require}>*</span>}
      </Box>
      {!noInput ? (
        <TextField
          type={type}
          className={clsx(classes.input, disabled && classes.disabled)}
          variant="outlined"
          size="small"
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
