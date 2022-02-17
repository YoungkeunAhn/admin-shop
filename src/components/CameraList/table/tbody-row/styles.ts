import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    imgBox: {
      width: 170,
      height: 120,
      margin: theme.spacing(0, 'auto'),
      '& img': {
        width: '100%',
        height: '100%',
        objectFit: 'fill',
      },
    },
  })
)

export default useStyles
