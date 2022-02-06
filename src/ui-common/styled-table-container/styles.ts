import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(2),
      borderRadius: 8,
      border: '1px solid #ddd',
      background: '#fff',
      '& thead': {
        whiteSpace: 'nowrap',
        '& th': {
          color: '#888',
          textAlign: 'center',
        },
      },
      '& tbody': {
        '&:nth-of-type(2)': {
          backgroundColor: theme.palette.action.hover,
        },
      },
    },
  })
)

export default useStyles
