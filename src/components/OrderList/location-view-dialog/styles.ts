import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    content: {
      padding: theme.spacing(2),
    },
    infoBox: {
      padding: theme.spacing(2),
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
    imgBox: {
      width: '100%',
      objectFit: 'contain',
      '& img': {
        width: '100%',
        height: '100%',
      },
    },
  })
)

export default useStyles
