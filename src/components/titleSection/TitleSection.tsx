import { createStyles, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    section: {
      height: "650px",
      width: "100%",
      backgroundColor: "#D3CEDF",
    },
  })
);

export default function TitleSection() {
  const classes = useStyles();
  return <div className={classes.section}>title section</div>;
}
