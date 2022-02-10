import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(1, 2),
      background: '#f9f9f9',
      borderTop: '1px solid #ddd',
    },
  })
)

export default useStyles
