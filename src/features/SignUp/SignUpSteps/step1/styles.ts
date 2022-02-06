import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    phoneAuthBtn: {
      marginLeft: theme.spacing(6),
      whiteSpace: 'nowrap',
    },
  })
)

export default useStyles
