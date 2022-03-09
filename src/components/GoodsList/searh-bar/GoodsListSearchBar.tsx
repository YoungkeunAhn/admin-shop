import SearchForm from '@/common/search-form/SearchForm'
import StyledOptionPaper from '@/common/styled-page-header/StyledOptionPaper'
import { Button } from '@material-ui/core'
import { useRouter } from 'next/router'
import React from 'react'

const menuList = [
  { value: 'menu', title: '메뉴명' },
  { value: 'summary', title: '간단설명' },
]

export default function GoodsListSearchBar() {
  const router = useRouter()
  const onSearch = (type: string, value: string) => {
    alert(`type: ${type} value: ${value}`)
  }

  const onClickAddBtn = () => {
    router.push('/my-store/goods/add-view')
  }

  return (
    <StyledOptionPaper>
      <Button color="primary" variant="contained" onClick={onClickAddBtn}>
        추가하기
      </Button>
      <SearchForm menuList={menuList} onSearch={onSearch} />
    </StyledOptionPaper>
  )
}
