import ReloadButton from '@/common/reload-button/ReloadButton'
import SearchForm from '@/common/search-form/SearchForm'
import StyledOptionPaper from '@/common/styled-page-header/StyledOptionPaper'
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from '@material-ui/core'
import React, { useState } from 'react'
import useStyles from './styles'

const menuList = [
  { value: 'ordernum', title: '주문번호' },
  { value: 'nickname', title: '닉네임' },
  { value: 'content', title: '내용' },
]

const replyStates = [
  { value: 1, label: '전체' },
  { value: 2, label: '대기중' },
  { value: 3, label: '완료' },
]

export default function ReviewManageSearchBar() {
  const classes = useStyles()
  const [replyState, setReplyState] = useState<number>(0)

  const onChangeSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
    setReplyState(event.target.value as number)
  }

  const onSearch = (type: string, value: string) => {
    alert(`type: ${type} value: ${value}`)
  }
  return (
    <StyledOptionPaper>
      <Box>
        <FormControl
          size='small'
          variant='outlined'
          className={classes.selectForm}
        >
          <InputLabel htmlFor='order-select'>주문 상태</InputLabel>
          <Select
            label='답변 상태'
            value={replyState}
            onChange={onChangeSelect}
            inputProps={{ id: 'reply-select' }}
          >
            <MenuItem value={0}>답변 상태</MenuItem>
            {replyStates.map((item, idx) => (
              <MenuItem key={idx} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <ReloadButton />
      </Box>
      <SearchForm onSearch={onSearch} menuList={menuList} />
    </StyledOptionPaper>
  )
}
