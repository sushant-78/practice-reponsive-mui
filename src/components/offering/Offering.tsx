import {
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import RedeemIcon from "@material-ui/icons/Redeem";

const offerings = [
  {
    icon: <RedeemIcon />,
    title: "Safety first",
    detail:
      "Fusce sodales urna erat, a posuere ipsum commodo in. Pellentesque habitant morbi tristique senectus.",
  },
  {
    icon: <RedeemIcon />,
    title: "Safety first",
    detail:
      "Fusce sodales urna erat, a posuere ipsum commodo in. Pellentesque habitant morbi tristique senectus.",
  },
  {
    icon: <RedeemIcon />,
    title: "Safety first",
    detail:
      "Fusce sodales urna erat, a posuere ipsum commodo in. Pellentesque habitant morbi tristique senectus.",
  },
  {
    icon: <RedeemIcon />,
    title: "Safety first",
    detail:
      "Fusce sodales urna erat, a posuere ipsum commodo in. Pellentesque habitant morbi tristique senectus.",
  },
  {
    icon: <RedeemIcon />,
    title: "Safety first",
    detail:
      "Fusce sodales urna erat, a posuere ipsum commodo in. Pellentesque habitant morbi tristique senectus.",
  },
  {
    icon: <RedeemIcon />,
    title: "Safety first",
    detail:
      "Fusce sodales urna erat, a posuere ipsum commodo in. Pellentesque habitant morbi tristique senectus.",
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    offerings: {
      width: "85%",
      minHeight: "800px",
      margin: "0 auto",
      flexDirection: "row",
    },
    offeringDetail: {
      padding: "60px 40px 60px 0",

      "& > div:first-child": {
        marginBottom: "8px",
      },
      [theme.breakpoints.down(786)]: {
        width: "100%",
        padding: "60px 0 60px 0",
      },
      [theme.breakpoints.up(786)]: {
        width: "65%",
      },
    },
    offeringImg: {
      width: "35%",
      "& > img": {
        width: "100%",
        height: "100%",
        objectFit: "cover",
      },
      [theme.breakpoints.down(786)]: {
        display: "none",
      },
      [theme.breakpoints.up(786)]: {
        width: "35",
      },
    },
    offeringContainer: {},
    offering: {
      width: "50%",
      padding: "20px",
      [theme.breakpoints.down(786)]: {
        width: "100%",
      },
      [theme.breakpoints.up(786)]: {
        width: "50%",
      },
    },
    offeringIcon: {
      flex: "1 1 0",
      "& > svg": {
        fontSize: "3rem",
      },
      alignSelf: "center",
    },
    offeringInfo: {
      flex: "3 3 0",
    },
  })
);

export default function Offering() {
  const classes = useStyles();
  return (
    <Grid container className={classes.offerings}>
      <Grid item container className={classes.offeringDetail}>
        <Grid item>
          <Typography>What we offer</Typography>
        </Grid>
        <Grid item>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis
            sollicitudin magna, in rutrum lacus gravida porttitor. Donec odio
            odio, dapibus tincidunt cursus id, tristique sit amet ipsum.
            Curabitur id metus ut tortor aliquam suscipit.
          </Typography>
        </Grid>
        <Grid item container className={classes.offeringContainer}>
          {offerings.map((offering) => {
            return (
              <Grid item container className={classes.offering}>
                <Grid item className={classes.offeringIcon}>
                  {offering.icon}
                </Grid>
                <Grid item container className={classes.offeringInfo}>
                  <Grid item>
                    <Typography>{offering.title}</Typography>
                  </Grid>
                  <Grid item>
                    <Typography>{offering.detail}</Typography>
                  </Grid>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <Grid item className={classes.offeringImg}>
        <img src="images/student.jpg" />
      </Grid>
    </Grid>
  );
}
