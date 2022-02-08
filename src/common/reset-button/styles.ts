import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      border: '1px solid #ddd',
      borderRadius: 4,
      width: 40,
      height: 40,
    },
  })
)

export default useStyles
