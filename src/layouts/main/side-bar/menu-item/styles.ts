import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '95%',
      // border: '1px solid #fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& li': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        borderBottom: '1px solid #888',
        padding: theme.spacing(0),
      },
    },
    titleBox: {
      width: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: theme.spacing(2, 1),
    },
    titleIcon: {
      color: '#fff',
      marginRight: theme.spacing(2),
    },
    subMenuBox: {
      width: '100%',
      background: '#182752',
      padding: theme.spacing(1),
      '& .MuiCollapse-wrapperInner': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
      },
    },
    itemButton: {
      '& p': {
        width: '100%',
        textAlign: 'left',
        padding: theme.spacing(1),
      },
    },
    select: {
      background: '#0D1C43',
    },
  })
)
export default useStyles
