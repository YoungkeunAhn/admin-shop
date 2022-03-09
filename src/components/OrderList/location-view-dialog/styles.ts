import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      padding: theme.spacing(2),
    },
    infoBox: {
      marginBottom: theme.spacing(3),
      '& > div': {
        display: 'flex',
        '& p:first-child': {
          marginRight: theme.spacing(2),
          color: '#888',
        },
        '& p': {
          fontWeight: 600,
        },
      },
      '& > div + div': {
        marginTop: theme.spacing(2),
      },
    },
    imgBox: {
      width: '100%',
      height: '100%',
      '& #map': {
        height: 500,
      },
    },
  })
)

export default useStyles
