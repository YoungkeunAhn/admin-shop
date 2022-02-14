import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    saveBtn: {
      display: 'block',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      marginLeft: '50%',
      // transform: 'translateX(-50%)',
    },
  })
)

export default useStyles
