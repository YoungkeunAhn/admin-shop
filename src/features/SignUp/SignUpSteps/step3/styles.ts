import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    shopInfoContainer: {
      display: 'flex',
      alignItems: 'flex-start',
      '& > div+div': {
        marginLeft: theme.spacing(4),
      },
    },
    positionInfoContainer: {
      display: 'flex',
      alignItems: 'flex-end',
      '& > div+div': {
        marginLeft: theme.spacing(4),
      },
    },
  })
)

export default useStyles
