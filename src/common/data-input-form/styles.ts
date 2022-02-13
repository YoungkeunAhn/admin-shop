import { createStyles, makeStyles, Theme } from '@material-ui/core'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      '& .MuiSelect-root': {
        width: 250,
        boxSizing: 'border-box',
      },
      '& + &': {
        marginTop: theme.spacing(2),
      },
      '& .MuiFormGroup-root': {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'nowrap',
        alignItems: 'center',
      },
      '& .MuiFormControlLabel-label': {
        fontSize: '0.7rem',
      },
    },
    labelBox: {
      minWidth: 150,
      fontWeight: 600,
      display: 'flex',
    },
    label: {
      fontWeight: 600,
    },
    input: {
      width: 250,
    },
    require: {
      color: '#EEBA00',
      marginLeft: theme.spacing(1),
    },
    disabled: {
      background: '#f2f2f2',
    },
  })
)

export default useStyles
