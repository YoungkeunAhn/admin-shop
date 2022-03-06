import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core"
import React, { useState } from "react"
import useStyles from "./styles"

type Props = {
  onSearch: (value: string, type: string) => void
  menuList: Array<{ value: string; title: string }>
}

export default function SearchForm(props: Props) {
  const classes = useStyles()
  const { onSearch, menuList } = props
  const [searchValue, setSearchValue] = useState("")
  const [searchType, setSearchType] = useState("all")

  const onChangeSelect = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSearchType(event.target.value as string)
  }

  const onChangeSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value)
  }

  return (
    <Box display="flex">
      <FormControl
        size="small"
        variant="outlined"
        className={classes.selectForm}
      >
        <InputLabel disableAnimation={true}></InputLabel>
        <Select onChange={onChangeSelect} value={searchType}>
          <MenuItem value="all">전체</MenuItem>
          {menuList.map((menu, idx) => (
            <MenuItem key={idx} value={menu.value}>
              {menu.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        size="small"
        variant="outlined"
        className={classes.input}
        value={searchValue}
        onChange={onChangeSearchValue}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onSearch(searchValue, searchType)
          }
        }}
      />
      <Button
        variant="contained"
        color="primary"
        size="small"
        className={classes.btn}
        onClick={() => onSearch(searchValue, searchType)}
      >
        검색
      </Button>
    </Box>
  )
}
