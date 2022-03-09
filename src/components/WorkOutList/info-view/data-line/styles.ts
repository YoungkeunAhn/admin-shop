import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      '& > .MuiTypography-root:first-child': {
        minWidth: 150,
        color: '#888',
      },
      '& + &': {
        marginTop: theme.spacing(2),
      },
    },
    color: { color: '#3266F1' },
  })
)

export default useStyles
