import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    selectForm: {
      minWidth: 120,
    },
    input: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(2),
    },
    btn: {
      width: 100,
      height: 40,
      '& span': {
        fontWeight: 600,
      },
    },
  })
)

export default useStyles
