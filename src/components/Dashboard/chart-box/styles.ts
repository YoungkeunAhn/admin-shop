import { createStyles, makeStyles, Theme } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: "#fff",
      padding: theme.spacing(2),
      width: "49%",
    },
    headerBox: {
      display: "flex",
      alignItems: "center",
      "& h6": {
        fontWeight: 600,
      },
    },
    btnBox: {
      marginLeft: theme.spacing(2),
    },
  })
)

export default useStyles
