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
        '& p:last-child': {
          fontWeight: 600,
        },
      },
      '& > div + div': {
        marginTop: theme.spacing(2),
      },
    },
    infoLine: {
      '& p:first-child': {
        marginRight: theme.spacing(2),
        color: '#888',
      },
    },
    goodsListBox: {
      display: 'flex',
      alignItems: 'center',
      '& p:first-child': {
        marginRight: theme.spacing(2),
        color: '#000',
        fontWeight: 600,
      },
      '& p': {
        marginRight: theme.spacing(2),
        color: '#000',
        fontWeight: 600,
      },
    },
  })
)

export default useStyles
