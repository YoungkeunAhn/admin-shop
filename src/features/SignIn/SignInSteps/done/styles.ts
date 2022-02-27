import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 300,
      margin: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& img': {
        marginBottom: theme.spacing(2),
      },
    },
    caption: {
      color: '#888',
      marginTop: theme.spacing(2),
    },
  })
)

export default useStyles
