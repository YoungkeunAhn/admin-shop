import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginBottom: theme.spacing(3),
      padding: theme.spacing(3),
    },

    title: {
      marginBottom: theme.spacing(3),
    },
    infoBox: {
      maxWidth: 500,
    },
    addBtn: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(18.75),
    },
  })
)

export default useStyles
