import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2, 1),
      marginBottom: theme.spacing(4),
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  })
)

export default useStyles
