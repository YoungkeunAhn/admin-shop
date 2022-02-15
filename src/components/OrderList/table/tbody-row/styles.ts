import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
      '&:hover': {
        backgroundColor: theme.palette.action.hover,
      },
    },
    nowrap: {
      whiteSpace: 'nowrap',
    },
    stateChangeBtn: {
      minWidth: '100px',
      color: '#888',
      background: '#fff',
      border: '1px solid #ddd',
      '& span': {
        whiteSpace: 'nowrap',
      },
    },
  })
)

export default useStyles
