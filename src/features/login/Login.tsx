import MainTitle from '@/common/main-title/MainTitle'
import { loginFailMsg } from '@/types/alert-msg'
import {
  Box,
  Button,
  ButtonBase,
  Container,
  Divider,
  TextField,
  Typography,
} from '@material-ui/core'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import useStyles from './styles'

export const baseUrl = 'http://pilot.inautopay.com:8070/'

export default function Login() {
  const classes = useStyles()
  const router = useRouter()

  const [shopId, setShopId] = useState<string>('')
  const [passwd, setPasswd] = useState<string>('')

  const onChangeShopId = (event: React.ChangeEvent<HTMLInputElement>) => {
    setShopId(event.target.value)
  }

  const onChangePasswd = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswd(event.target.value)
  }

  const onLogin = async () => {
    try {
      const { data } = await axios.post(baseUrl + 'apiv1/shop/login/login')
      router.push('/dashboard')
    } catch (e) {
      console.error(e)
      alert(loginFailMsg)
    }
  }

  return (
    <Container maxWidth="xs" className={classes.container}>
      <Box className={classes.root}>
        <MainTitle titleSize="h2" />
        <TextField
          fullWidth
          variant="outlined"
          label="아이디 입력"
          value={shopId}
          onChange={onChangeShopId}
        />
        <TextField
          fullWidth
          variant="outlined"
          label="비밀번호 입력"
          type="password"
          value={passwd}
          onChange={onChangePasswd}
        />
        <Button variant="contained" color="primary" onClick={onLogin}>
          로그인
        </Button>
        <Box className={classes.menuPart}>
          <ButtonBase>
            <Typography
              variant="caption"
              onClick={() => alert('준비중인 페이지 입니다.')}
            >
              비밀번호 찾기
            </Typography>
          </ButtonBase>
          <Divider orientation="vertical" variant="middle" flexItem />
          <ButtonBase onClick={() => router.push('sign-in')}>
            <Typography variant="caption">회원가입</Typography>
          </ButtonBase>
        </Box>
      </Box>
    </Container>
  )
}
