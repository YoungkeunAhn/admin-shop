import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      padding: theme.spacing(2),
      background: '#fff',
      '& thead': {
        whiteSpace: 'nowrap',
        '& th': {
          color: '#888',
          textAlign: 'center',
        },
      },
      '& tbody tr': {
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        '&:hover': {
          backgroundColor: theme.palette.action.hover,
        },
      },
    },
  })
)

export default useStyles
