import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '32%',
      '& > div': {
        display: 'flex',
        alignItems: 'center',
        borderRadius: 8,
      },
      '& > div + div': {
        marginTop: theme.spacing(1),
      },
    },
    titleBox: {
      justifyContent: 'space-between',
      padding: theme.spacing(2),
      background: '#182C62',
      '& .MuiTypography-root': {
        color: '#fff',
      },
      '& svg': {
        color: '#fff',
      },
    },
    mainBox: {
      justifyContent: 'center',
      padding: theme.spacing(4, 0),
      border: '1px solid #ddd',
      background: '#fff',
      '& .MuiTypography-root + .MuiTypography-root': {
        marginLeft: theme.spacing(1),
      },
    },
    subBox: {
      justifyContent: 'space-between',
      padding: theme.spacing(2),
      border: '1px solid #ddd',
      background: '#fff',
    },
    totalBox: {
      display: 'flex',
      marginLeft: theme.spacing(2),
      '& hr': {
        margin: theme.spacing(0, 1),
      },
    },
  })
)

export default useStyles
