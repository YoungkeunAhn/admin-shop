import useStyles from './styles'
import {
  Box,
  Button,
  Container,
  Divider,
  Input,
  TextField,
  Typography,
} from '@material-ui/core'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const classes = useStyles()

  const onLogin = () => {
    router.push('/dashboard')
  }
  return (
    <Container maxWidth='xs' className={classes.container}>
      <Box className={classes.root}>
        <Typography variant='h4'>INCAPPAY</Typography>
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
        <Box display='flex' justifyContent='center'>
          <Typography variant='caption'>비밀번호 찾기</Typography>
          <Divider orientation='vertical' variant='middle' flexItem />
          <Typography variant='caption'>회원가입</Typography>
        </Box>
      </Box>
    </Container>
  )
}
