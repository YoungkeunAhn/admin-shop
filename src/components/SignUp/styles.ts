import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100vh',
      paddingTop: theme.spacing(10),
    },
    header: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      '& > .MuiTypography-root, & > button': {
        marginBottom: theme.spacing(2),
      },
    },
    stepper: {
      width: '50vw',
      background: 'none',
      '& .MuiStepLabel-root': {
        flexDirection: 'column',
        alignItems: 'center',
      },
      '& .MuiStepLabel-iconContainer': {
        padding: 0,
        marginBottom: theme.spacing(0.5),
      },
    },
    btnSpacing: {
      marginTop: theme.spacing(2),
      paddingBottom: theme.spacing(10),
    },
  })
)

export default useStyles
