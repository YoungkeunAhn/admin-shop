import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',

      '& > .MuiTypography-root': {
        color: '#3266F1',
        marginBottom: theme.spacing(3),
        fontWeight: 600,
      },
      '& .MuiFormControl-root': {
        marginBottom: theme.spacing(2),
        width: '25vw',
      },
      '& > button': {
        width: '25vw',
        marginBottom: theme.spacing(3),
      },
    },
    menuPart: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '& .MuiTypography-root': {
        color: '#888',
      },
    },
  })
)

export default useStyles
