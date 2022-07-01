import {
  Button,
  createStyles,
  Grid,
  Hidden,
  InputBase,
  Link,
  makeStyles,
  Theme,
} from "@material-ui/core";
import PhoneIcon from "@material-ui/icons/Phone";
import SendIcon from "@material-ui/icons/Send";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    navigation: {
      width: "80%",
      minHeight: "140px",
      margin: "0 auto",

      backgroundColor: "#F2D7D9",
      display: "flex",
      flexDirection: "column",
      [theme.breakpoints.down("sm")]: {
        width: "90%",
      },
    },
    logoAndInfo: {
      flexDirection: "row",
      minHeight: "60%",
      padding: "20px",
      borderBottom: "1px solid #f2f2f2",
      alignItems: "center",
      "& > * ": {
        flex: "1 1 0",
      },
      [theme.breakpoints.down(800)]: {
        flexDirection: "column",
        "& > *:not(:last-child) ": {
          marginBottom: "20px",
        },
      },
    },
    logo: {
      [theme.breakpoints.down(800)]: {
        margin: "0",
        flexBasis: "0%",
        alignSelf: "flex-start",
      },
    },
    applyNowBtn: {
      justifyContent: "flex-end",
      alignSelf: "center",
    },
    actionIcon: {
      marginRight: "10px",
    },
    linksContainer: {
      padding: "20px",
      alignItems: "center",
      color: "#fff",
      backgroundColor: "#1B2430",
      [theme.breakpoints.down("md")]: {
        justifyContent: "space-between",
      },
    },
    links: {
      "& > *": {
        marginRight: "30px",
      },
      [theme.breakpoints.down("md")]: {
        width: "30%",
        display: "none",
      },
      [theme.breakpoints.up("md")]: {
        display: "flex",
        width: "60%",
      },
    },
    menuIconContainer: {
      color: "#fff",
      fontSize: "16px",
      [theme.breakpoints.down("md")]: {
        width: "10%",
        display: "block",
      },
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    searchBarContainer: {
      display: "flex",
      justifyContent: "flex-end",
      [theme.breakpoints.down("md")]: {
        width: "75%",
      },
      [theme.breakpoints.up("md")]: {
        width: "40%",
      },
    },

    searchBar: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "rgba(255,255,255,0.1)",
      borderRadius: "5px",
      width: "80%",
      padding: "0.2rem",
    },
    searchIcon: {
      padding: "0 0.5rem",
    },
    inputBase: {
      color: "#fff",
    },
  })
);

export default function Navigation() {
  const classes = useStyles();

  return (
    <Grid container className={classes.navigation}>
      <Grid item container className={classes.logoAndInfo}>
        <Grid item className={classes.logo}>
          Fox University.
        </Grid>
        <Grid item container>
          <Grid item className={classes.actionIcon}>
            <SendIcon />
          </Grid>
          <Grid item>
            <div>Email:</div>
            <div>yourEmail@email.com</div>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item className={classes.actionIcon}>
            <PhoneIcon />
          </Grid>
          <Grid>
            <div>Call:</div>
            <div>Call Us: +123456789</div>
          </Grid>
        </Grid>
        <Grid item container className={classes.applyNowBtn}>
          <Grid item>
            <Button variant="contained" color="primary">
              APPLY NOW
            </Button>
          </Grid>
        </Grid>
      </Grid>

      <Grid container className={classes.linksContainer}>
        <Grid item container className={classes.links}>
          <Grid item>
            <Link href="#" color="inherit">
              Home
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" color="inherit">
              About
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" color="inherit">
              Contact
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" color="inherit">
              Staff
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" color="inherit">
              Blog
            </Link>
          </Grid>
        </Grid>

        <Grid item className={classes.menuIconContainer}>
          <MenuIcon />
        </Grid>

        <Grid item className={classes.searchBarContainer}>
          <div className={classes.searchBar}>
            <SearchIcon className={classes.searchIcon} />
            <InputBase className={classes.inputBase} />
          </div>
        </Grid>
      </Grid>
    </Grid>
  );
}
