import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',

      '&+&': {
        marginTop: theme.spacing(2),
      },
    },
    title: {
      color: '#888',
      marginRight: theme.spacing(2),
    },
  })
)

export default useStyles
