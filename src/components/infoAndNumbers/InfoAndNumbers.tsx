import {
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";

const info = [
  {
    statistic: 18,
    description: "Certified Teachers",
  },
  {
    statistic: 401,
    description: "Students",
  },
  {
    statistic: 30,
    description: "Courses",
  },
  {
    statistic: 50,
    description: "Awards Won",
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    infoAndNumbers: {
      color: "#dedede",
      background:
        "linear-gradient(75deg, rgba(44, 54, 57, 0.5) 0%, rgba(44, 54, 57, 0.7) 50%,rgba(44, 54, 57, 0.9) 100%), url('images/students.jpg') no-repeat fixed center",
      backgroundSize: "cover",
    },
    infoAndNumbersContainer: {
      width: "85%",
      margin: "0 auto",
      padding: "100px 0",
      [theme.breakpoints.down(786)]: {
        flexDirection: "column",
      },
    },
    infoVideoContainer: {
      paddingRight: "60px",
      "& > img": {
        width: "100%",
        height: "100%",
      },
      flex: "1 1 0",
      [theme.breakpoints.down(786)]: {
        marginBottom: "60px",
        paddingRight: "0px",
      },
    },
    infoAndNumbersDetail: {
      flex: "1 1 0",
      "& > h2:first-child": {
        marginBottom: "12px",
      },
    },
    statistics: {
      marginTop: "50px",
      [theme.breakpoints.down(786)]: {
        flexDirection: "column",
      },
    },
    statistic: {
      flex: "1 1 0",
      "& > *": {
        textAlign: "center",
      },
      [theme.breakpoints.down(786)]: {
        "&:not(:last-child)": {
          marginBottom: "30px",
        },

        "& > :first-child": {
          marginBottom: "6px",
        },
      },
    },
  })
);

export default function InfoAndNumbers() {
  const classes = useStyles();
  return (
    <div className={classes.infoAndNumbers}>
      <Grid container className={classes.infoAndNumbersContainer}>
        <Grid item className={classes.infoVideoContainer}>
          <img src="images/video-player-placeholder.gif" />
        </Grid>
        <Grid item className={classes.infoAndNumbersDetail}>
          <Typography variant="h4" component="h2">
            Fox University
          </Typography>
          <Typography variant="body1" component="p">
            Vestibulum eget magna lobortis, tristique elit id, vestibulum nisl.
            Pellentesque congue urna enim, ac egestas neque scelerisque sed.
            Donec eu ultrices ex. Phasellus in ex a lorem laoreet pellentesque.
          </Typography>
          <Typography variant="body1" component="p">
            Vestibulum eget magna lobortis, tristique elit id, vestibulum nisl.
            Pellentesque congue urna enim, ac egestas neque scelerisque sed.
            Donec eu ultrices ex.
          </Typography>
        </Grid>
        <Grid item container className={classes.statistics}>
          {info.map((item) => {
            return (
              <Grid item className={classes.statistic}>
                <Typography variant="h5" component="h3">
                  {item.statistic}
                </Typography>
                <Typography variant="body2" component="h3">
                  {item.description}
                </Typography>
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </div>
  );
}
