import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    dateBox: {
      display: 'flex',
      alignItems: 'center',
      '& span': {
        margin: theme.spacing(0, 1),
      },
    },
  })
)

export default useStyles
