import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    paper: {
      minWidth: 400,
      padding: theme.spacing(3),
      flex: 1,
      '& + & ': {
        marginLeft: theme.spacing(3),
      },
    },
    title: {
      marginRight: theme.spacing(2),
    },
    infoBox: {
      marginTop: theme.spacing(3),
    },
  })
)

export default useStyles
