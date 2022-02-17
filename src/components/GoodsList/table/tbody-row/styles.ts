import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    imgBox: {
      width: 140,
      height: 85,
      margin: theme.spacing(0, 'auto'),
      '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
      },
    },
  })
)

export default useStyles
