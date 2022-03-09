import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      '& .MuiTypography-root': {
        minWidth: 150,
      },
      '& + &': {
        marginTop: theme.spacing(2),
      },
    },
  })
)

export default useStyles
