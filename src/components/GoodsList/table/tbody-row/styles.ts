import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    imgBox: {
      margin: theme.spacing(0, 'auto'),
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'center',
      '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
      },
    },
  })
)

export default useStyles
