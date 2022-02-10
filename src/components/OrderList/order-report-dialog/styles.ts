import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      padding: theme.spacing(2),
    },
    infoBox: {
      padding: theme.spacing(2),
      background: '#f5f5f5',
      borderRadius: 8,
      marginBottom: theme.spacing(3),
      '& > div': {
        display: 'flex',
        '& p:first-child': {
          marginRight: theme.spacing(2),
        },
      },
      '& > div + div': {
        marginTop: theme.spacing(2),
      },
    },
    radioItemBox: {
      '& .MuiTypography-caption': {
        color: '#888',
      },
    },
    captionBox: {
      display: 'flex',
      flexDirection: 'column',
      color: '#888',
      marginTop: theme.spacing(2),
      '& span:last-child': {
        marginLeft: theme.spacing(1),
      },
    },
  })
)

export default useStyles
