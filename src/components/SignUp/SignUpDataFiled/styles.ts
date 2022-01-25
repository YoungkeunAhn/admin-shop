import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
    },
    label: {
      minWidth: 150,
      fontWeight: 600,
    },
    input: {
      width: 400,
    },
  })
)

export default useStyles
