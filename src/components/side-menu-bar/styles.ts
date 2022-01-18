import { createStyles, makeStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    sideBar: {
      maxWidth: "272px",
      height: "100vh",
      backgroundColor: "#182C62",

      "& li": {
        display: "flex",
        justifyContent: "space-between",
      },
      "& .MuiTypography-root": {
        color: "#fff",
      },
      "& svg": {
        fill: "#fff",
      },
    },
    sideBarHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: "1px solid #888",
      padding: theme.spacing(2),
    },
  })
);
export default useStyles;
