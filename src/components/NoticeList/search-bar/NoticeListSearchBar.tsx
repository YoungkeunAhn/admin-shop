import SearchForm from '@/common/search-form/SearchForm'
import StyledOptionPaper from '@/common/styled-page-header/StyledOptionPaper'
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'

import React, { useState } from 'react'
import useStyles from './styles'

const menuList = [{ value: 'title', title: '제목' }]

export default function NoticeListSearchBar() {
  const classes = useStyles()
  const [categoryValue, setCategoryValue] = useState<number>()

  const onSearch = (type: string, value: string) => {
    alert(`type: ${type} value: ${value}`)
  }

  const onChangeCategory = (event: React.ChangeEvent<{ value: unknown }>) => {
    setCategoryValue(event.target.value as number)
  }

  return (
    <StyledOptionPaper>
      <FormControl
        className={classes.categoryForm}
        variant="outlined"
        size="small"
      >
        <InputLabel htmlFor="category-select">카테고리 선택</InputLabel>
        <Select
          label="카테고리 선택"
          value={categoryValue}
          onChange={onChangeCategory}
          inputProps={{ id: 'category-select' }}
        >
          <MenuItem value={0}>전체</MenuItem>
          <MenuItem value={1}>시스템</MenuItem>
          <MenuItem value={2}>이벤트</MenuItem>
          <MenuItem value={3}>안내</MenuItem>
        </Select>
      </FormControl>
      <SearchForm menuList={menuList} onSearch={onSearch} />
    </StyledOptionPaper>
  )
}
