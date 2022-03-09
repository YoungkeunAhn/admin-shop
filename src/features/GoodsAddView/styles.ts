import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      minWidth: 700,
      maxWidth: 1000,
    },
    title: {
      marginBottom: theme.spacing(3),
    },
    radioBox: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    lineTitle: {
      minWidth: 150,
    },
    uploadBtn: {
      minWidth: 150,
      marginLeft: theme.spacing(3),
    },
    addBtn: {
      marginTop: theme.spacing(3),
      marginLeft: '50%',
      transform: 'translateX(-50%)',
    },
  })
)

export default useStyles
