import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: '#182C62',
      color: '#fff',
      fontWeight: 600,
      padding: 0,
    },
    titleBox: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: theme.spacing(1, 2),
    },
    closeIcon: {
      color: '#fff',
    },
  })
)

export default useStyles
