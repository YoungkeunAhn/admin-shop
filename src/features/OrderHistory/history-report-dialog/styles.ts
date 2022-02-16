import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      padding: theme.spacing(3),
    },
    infoBox: {
      padding: theme.spacing(2),
      background: '#f5f5f5',
      borderRadius: 4,
      marginBottom: theme.spacing(3),
    },
    radioBox: {
      display: 'flex',
      flexDirection: 'row',
      marginBottom: theme.spacing(3),
    },
  })
)

export default useStyles
