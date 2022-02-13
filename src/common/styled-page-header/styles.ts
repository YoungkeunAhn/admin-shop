import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      border: '1px solid #ddd',
      borderRadius: 4,
      padding: theme.spacing(2, 1),
      background: '#fff',
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  })
)

export default useStyles
