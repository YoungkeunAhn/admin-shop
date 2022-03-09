import { createStyles, makeStyles, Theme } from '@material-ui/core'

const drawerWidth = 230

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sideBar: {
      width: drawerWidth,
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#182C62',
      '& li': {
        display: 'flex',
        justifyContent: 'space-between',
      },
      '& .MuiTypography-root': {
        color: '#fff',
      },
      '& svg': {
        fill: '#fff',
      },
    },
    sideBarHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid #888',
      padding: theme.spacing(2),
    },

    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: '50px',
      // [theme.breakpoints.up('sm')]: {
      //   width: theme.spacing(9) + 1,
      // },
    },
  })
)
export default useStyles
