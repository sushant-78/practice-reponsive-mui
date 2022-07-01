import { CssBaseline, Grid, Theme } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/styles";
import Courses from "./components/courses/Courses";
import FeatureCards from "./components/featureCards/FeatureCards";
import InfoAndNumbers from "./components/infoAndNumbers/InfoAndNumbers";
import Navigation from "./components/navigation/Navigation";
import Offering from "./components/offering/Offering";
import TitleSection from "./components/titleSection/TitleSection";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    homePage: {
      display: "flex",
      flexDirection: "column",
    },
    navigationContainer: {
      display: "flex",
    },
  })
);

function App() {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <Grid container className={classes.homePage}>
        <Grid item className={classes.navigationContainer}>
          <Navigation />
        </Grid>
        <Grid item>
          <TitleSection />
        </Grid>
        <Grid item>
          <FeatureCards />
        </Grid>
        <Grid item>
          <Offering />
        </Grid>
        <Grid item>
          <InfoAndNumbers />
        </Grid>
        <Grid item>
          <Courses />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
