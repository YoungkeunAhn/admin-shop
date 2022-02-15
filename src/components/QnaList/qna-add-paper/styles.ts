import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(3),
      marginBottom: theme.spacing(3),
      '& .MuiTypography-root': {
        minWidth: 150,
      },
    },
    title: {
      marginBottom: theme.spacing(3),
    },
    inputsBox: {
      maxWidth: 700,
    },
    inputLine: {
      display: 'flex',
      alignItems: 'center',

      '& +&': {
        marginTop: theme.spacing(2),
      },
    },
    multiLineBox: {
      marginTop: theme.spacing(2),
      display: 'flex',
      alignItems: 'flex-start',
    },
  })
)

export default useStyles
