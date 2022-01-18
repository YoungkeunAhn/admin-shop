import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(1),

      "& li": {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        borderBottom: "1px solid #888",
      },
    },
    titleBox: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    titleIcon: {
      color: "#fff",
      marginRight: theme.spacing(2),
    },
    subMenuBox: {
      width: "100%",
      "& .MuiCollapse-wrapperInner": {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      },
    },
  })
);
export default useStyles;
