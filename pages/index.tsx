import MainTitle from '@/common/main-title/MainTitle'
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
import useStyles from './styles'

export default function Home() {
  const router = useRouter()
  const classes = useStyles()

  const onLogin = () => {
    // axios.get('http://pilot.inautopay.com:8070/test')
    router.push('/dashboard')
  }

  return (
    <Container maxWidth='xs' className={classes.container}>
      <Box className={classes.root}>
        <MainTitle titleSize='h2' />
        <TextField fullWidth variant='outlined' label='아이디 입력' />
        <TextField
          fullWidth
          variant='outlined'
          label='비밀번호 입력'
          type='password'
        />
        <Button variant='contained' color='primary' onClick={onLogin}>
          로그인
        </Button>
        <Box className={classes.menuPart}>
          <ButtonBase>
            <Typography
              variant='caption'
              onClick={() => alert('준비중인 페이지 입니다.')}
            >
              비밀번호 찾기
            </Typography>
          </ButtonBase>
          <Divider orientation='vertical' variant='middle' flexItem />
          <ButtonBase onClick={() => router.push('sign-up')}>
            <Typography variant='caption'>회원가입</Typography>
          </ButtonBase>
        </Box>
      </Box>
    </Container>
  )
}
