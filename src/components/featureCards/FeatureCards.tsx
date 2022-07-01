import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";

const featureCardsContents = [
  {
    backgroundColor: "#76BA99",
    icon: <PersonIcon />,
    title: "Certified Teachers",
    detail:
      "Morbi in euismod nibh. Quisque id tortor at lectus lobortis rhoncus eget ut velit. Curabitur ac fermentum nulla. Suspendisse ac maximus sapien, at imperdiet enim. Aliquam quis urna sem.",
  },
  {
    backgroundColor: "#ADCF9F",
    icon: <PersonIcon />,
    title: "Certified Teachers",
    detail:
      "Morbi in euismod nibh. Quisque id tortor at lectus lobortis rhoncus eget ut velit. Curabitur ac fermentum nulla. Suspendisse ac maximus sapien, at imperdiet enim. Aliquam quis urna sem.",
  },
  {
    backgroundColor: "#CED89E",
    icon: <PersonIcon />,
    title: "Certified Teachers",
    detail:
      "Morbi in euismod nibh. Quisque id tortor at lectus lobortis rhoncus eget ut velit. Curabitur ac fermentum nulla. Suspendisse ac maximus sapien, at imperdiet enim. Aliquam quis urna sem.",
  },
  {
    backgroundColor: "#FFDCAE",
    icon: <PersonIcon />,
    title: "Certified Teachers",
    detail:
      "Morbi in euismod nibh. Quisque id tortor at lectus lobortis rhoncus eget ut velit. Curabitur ac fermentum nulla. Suspendisse ac maximus sapien, at imperdiet enim. Aliquam quis urna sem.",
  },
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    featuredCards: {
      display: "flex",
      flexDirection: "row",
    },
    featuredCard: {
      flex: "1 1 0",
      padding: "50px",
      textAlign: "center",
      "& > *:not(:last-child)": {
        marginBottom: "10px",
      },
    },
  })
);

export default function FeatureCards() {
  const classes = useStyles();
  return (
    <Grid container className={classes.featuredCards}>
      {featureCardsContents.map((featureCard) => {
        return (
          <Grid
            className={classes.featuredCard}
            item
            style={{ backgroundColor: featureCard.backgroundColor }}
          >
            <div>{featureCard.icon}</div>
            <div>{featureCard.title}</div>
            <div>{featureCard.detail}</div>
          </Grid>
        );
      })}
    </Grid>
  );
}
