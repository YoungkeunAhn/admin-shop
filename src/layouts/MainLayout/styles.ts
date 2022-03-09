import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      padding: theme.spacing(0),
    },
    main: {
      width: '100%',
      background: '#f5f5f5',
      height: '100vh',
    },
  })
)
export default useStyles
