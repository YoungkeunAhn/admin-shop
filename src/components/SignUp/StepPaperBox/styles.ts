import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '60vw',
      minWidth: 900,
      padding: theme.spacing(4, 3),
      border: '1px solid #ddd',
      '& > .MuiTypography-root': {
        marginBottom: theme.spacing(4),
      },
      '& + &': {
        marginTop: theme.spacing(3),
      },
    },
    content: {
      '& > div + div': {
        marginTop: theme.spacing(2),
      },
    },
  })
)

export default useStyles
