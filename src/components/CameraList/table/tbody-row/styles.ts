import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    imgBox: {
      margin: theme.spacing(0, 'auto'),
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'fill',
      },
    },
  })
)

export default useStyles
