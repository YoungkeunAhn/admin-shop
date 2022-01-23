import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: '1px solid black',
    },
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',

      '& h4': {
        marginBottom: theme.spacing(3),
      },
      '& .MuiFormControl-root': {
        marginBottom: theme.spacing(2),
      },
    },
  })
)

export default useStyles
