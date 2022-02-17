import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    saveBtn: {
      display: 'block',
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(2),
      marginLeft: '20%',
      // transform: 'translateX(-50%)',
    },
  })
)

export default useStyles
