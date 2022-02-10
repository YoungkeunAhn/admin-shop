import ResetButton from '@/common/reset-button/ResetButton'
import SearchForm from '@/common/search-form/SearchForm'
import StyledOptionPaper from '@/common/styled-page-header/StyledOptionPaper'
import { Box, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import useStyles from './styles'

const searchMenuList = [
  { value: 'all', title: '전체' },
  { value: 'nickname', title: '닉네임' },
  { value: 'carnum', title: '자동차번호' },
]

export default function OrderHistorySearchBar() {
  const classes = useStyles()
  const [firstDate, setFirstDate] = useState<string>()
  const [secondDate, setSecondDate] = useState<string>()

  const onChangeFirstDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFirstDate(event.target.value)
  }

  const onChangeSecondDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSecondDate(event.target.value)
  }

  const onSearch = () => {
    console.log('search')
  }

  return (
    <StyledOptionPaper>
      <Box display='flex' justifyContent='space-between' alignItems='center'>
        <Box display='flex'>
          <Box className={classes.dateBox}>
            <TextField
              type='date'
              value={firstDate}
              onChange={onChangeFirstDate}
            />
            <span>~</span>
            <TextField
              type='date'
              value={secondDate}
              onChange={onChangeSecondDate}
            />
          </Box>

          <ResetButton />
        </Box>
        <SearchForm onSearch={onSearch} menuList={searchMenuList} />
      </Box>
    </StyledOptionPaper>
  )
}
