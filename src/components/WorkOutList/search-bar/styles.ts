import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
    },
    dateBox: {
      display: 'flex',
      alignItems: 'center',
      '& span': {
        margin: theme.spacing(0, 1),
      },
    },
    radioGroup: {
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
    },
  })
)

export default useStyles
