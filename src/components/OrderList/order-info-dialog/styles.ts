import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      padding: theme.spacing(2),
      '& hr': {
        margin: theme.spacing(3, 0),
      },
    },
    infoBox: {
      '& > div': {
        display: 'flex',
        '& p:first-child': {
          marginRight: theme.spacing(2),
          color: '#888',
        },
        '& p:last-child': {
          fontWeight: 600,
        },
      },
      '& > div + div': {
        marginTop: theme.spacing(2),
      },
    },
  })
)

export default useStyles
