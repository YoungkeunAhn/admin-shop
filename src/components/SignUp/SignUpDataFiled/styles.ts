import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      '& .MuiSelect-root': {
        width: 400,
        boxSizing: 'border-box',
      },
    },
    label: {
      minWidth: 150,
      fontWeight: 600,
      display: 'flex',
    },
    input: {
      width: 400,
    },
    require: {
      color: '#EEBA00',
      marginLeft: theme.spacing(1),
    },
  })
)

export default useStyles
