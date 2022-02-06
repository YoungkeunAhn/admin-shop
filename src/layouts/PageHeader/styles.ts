import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: theme.spacing(1),
      width: '100%',
      // boxShadow: '1px 1px 3px #888',
      '& > div': {
        display: 'flex',
        alignItems: 'center',
        flexWrap: 'nowrap',
      },
    },
    titleBox: {
      fontWeight: 600,
      '& button': {
        marginRight: theme.spacing(1),
      },
      '& p': {
        fontWeight: 600,
      },
    },
    profile: {
      display: 'flex',
      alignItems: 'center',
      '& .MuiAvatar-root': {
        width: '24px',
        height: '24px',
        marginRight: theme.spacing(1),
      },
    },
    logOutBtn: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '& .MuiTypography-root': {
        marginLeft: theme.spacing(1),
      },
    },
    shopState: {
      display: 'flex',
      alignItems: 'center',
      '& > span': {
        color: '#888',
        marginRight: theme.spacing(1),
      },
      '& .MuiInput-root': {
        minWidth: '90px',
        textAlign: 'center',
      },
    },
  })
)

export default useStyles
