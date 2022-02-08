import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    selectForm: {
      minWidth: 150,
      marginRight: theme.spacing(1),
    },
    circle: {
      borderRadius: '100%',
      width: 10,
      height: 10,
      display: 'block',
      marginRight: theme.spacing(1),
    },
    stateBox: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: theme.spacing(1),
      '& + &': {
        marginLeft: theme.spacing(1.5),
      },
    },
    stateCount: {
      marginLeft: theme.spacing(1),
      fontWeight: 600,
    },
  })
)

export default useStyles
