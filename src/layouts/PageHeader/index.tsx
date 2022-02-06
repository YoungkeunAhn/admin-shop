import {
  Avatar,
  Box,
  Button,
  Divider,
  Icon,
  IconButton,
  MenuItem,
  Paper,
  Select,
  Typography,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew'
import React, { useState } from 'react'
import useStyles from './styles'

const username = '테스터'

type Props = {
  title: string
}

type ShopStateKey = 'A001' | 'A002'
const shopState: Record<ShopStateKey, string> = {
  A001: '정상 업무중',
  A002: '영업 종료',
}

export default function PageHeader(props: Props) {
  const { title } = props
  const classes = useStyles()
  const [profileUrl, setProfileUrl] = useState<string | null>(null)
  const [shopCurrentState, setShopCurrentState] = useState<ShopStateKey>('A001')

  const onChangeShopState = (event: React.ChangeEvent<{ value: unknown }>) => {
    setShopCurrentState(event.target.value as ShopStateKey)
    console.log(shopCurrentState)
  }

  return (
    <Paper className={classes.root} component='div'>
      <div className={classes.titleBox}>
        <IconButton size='small'>
          <MenuIcon fontSize='small' />
        </IconButton>
        <Typography variant='body1'>{title}</Typography>
      </div>
      <div>
        <Box className={classes.profile}>
          <Avatar
            src={profileUrl ?? 'nullProfileImg.png'} // src={profileUrl}
          />
          <Typography variant='body1'>{username}</Typography>
        </Box>

        <Divider orientation='vertical' variant='middle' flexItem />

        <Box className={classes.shopState}>
          <Typography variant='caption'>현재상태</Typography>
          <Select value={shopCurrentState} onChange={onChangeShopState}>
            {Object.entries(shopState).map((state, idx) => (
              <MenuItem key={idx} value={state[0]}>
                <Typography variant='caption'>{state[1]}</Typography>
              </MenuItem>
            ))}
          </Select>
        </Box>

        <Divider orientation='vertical' variant='middle' flexItem />

        <Box>
          <Button
            className={classes.logOutBtn}
            variant='outlined'
            color='default'
          >
            <Icon fontSize='small'>
              <PowerSettingsNewIcon fontSize='small' />
            </Icon>
            <Typography variant='caption'>로그아웃</Typography>
          </Button>
        </Box>
      </div>
    </Paper>
  )
}
