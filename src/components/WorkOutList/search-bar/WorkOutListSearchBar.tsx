import ReloadButton from '@/common/reload-button/ReloadButton'
import StyledOptionPaper from '@/common/styled-page-header/StyledOptionPaper'
import {
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
} from '@material-ui/core'
import React, { useState } from 'react'
import useStyles from './styles'

export default function WorkOutListSearchBar() {
  const classes = useStyles()
  const [radioValue, setRadioValue] = useState<number>(0)
  const [firstDate, setFirstDate] = useState()
  const [secondDate, setSecondDate] = useState()

  const onChangeRadioValue = (event: React.ChangeEvent<{ value: unknown }>) => {
    setRadioValue(event.target.value as number)
  }

  const onChangeFirstDate = (event: React.ChangeEvent<{ value: unknown }>) => {
    console.log(event.target.value)
  }
  const onChangeSecondDate = (event: React.ChangeEvent<{ value: unknown }>) => {
    console.log(event.target.value)
  }

  return (
    <StyledOptionPaper>
      <Box className={classes.root}>
        <RadioGroup
          className={classes.radioGroup}
          value={radioValue}
          onChange={onChangeRadioValue}
        >
          <FormControlLabel
            control={<Radio value={0} size="small" color="primary" />}
            label="전체"
            labelPlacement="end"
          />
          <FormControlLabel
            control={<Radio value={1} size="small" color="primary" />}
            label="월별"
            labelPlacement="end"
          />
          <FormControlLabel
            control={<Radio value={2} size="small" color="primary" />}
            label="연별"
            labelPlacement="end"
          />
        </RadioGroup>
        <Box className={classes.dateBox}>
          <TextField
            type="date"
            size="small"
            variant="outlined"
            value={firstDate}
            onChange={onChangeFirstDate}
          />
          <span>~</span>
          <TextField
            type="date"
            size="small"
            variant="outlined"
            value={secondDate}
            onChange={onChangeSecondDate}
          />
        </Box>
        <ReloadButton />
      </Box>
    </StyledOptionPaper>
  )
}
