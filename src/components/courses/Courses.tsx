import {
  Button,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    courses: {
      padding: "100px 0",
      flexDirection: "column",
    },
    courseHeading: {
      width: "70%",

      textAlign: "center",
      margin: "0 auto",
      marginBottom: "60px",

      "& > :first-child": {
        marginBottom: "12px",
      },
    },

    courseCards: {
      [theme.breakpoints.down(786)]: {
        flexDirection: "column",
        "& > *:not(:last-child)": {
          marginBottom: "20px",
        },
      },
    },
    courseCard: {
      flex: "1 1 0",
      padding: "0 10px ",
    },
    courseImageContainer: {
      "& > img": {
        width: " 100%",
        height: "100%",
      },
    },
    courseInfo: {
      "& > *": {
        flex: " 1 1 0",
      },
    },
  })
);

const courses = [
  {
    image: "images/courseImage.jpg",
    instructorName: "instructor 1",
    noOfSeats: "60 seats",
    duration: "4 years",
    courseTitle: "course-1",
    courseDescription:
      "Nulla posuere rhoncus lorem, sit amet dapibus risus egestas in. Pellentesque at ante nec metus feugiat condimentum.",
  },
  {
    image: "images/courseImage2.jpg",
    instructorName: "instructor 2",
    noOfSeats: "40 seats",
    duration: "3 years",
    courseTitle: "course-2",
    courseDescription:
      "Nulla posuere rhoncus lorem, sit amet dapibus risus egestas in. Pellentesque at ante nec metus feugiat condimentum.",
  },
  {
    image: "images/courseImage3.jpg",
    instructorName: "instructor 3",
    noOfSeats: "60 seats",
    duration: "4 years",
    courseTitle: "course-3",
    courseDescription:
      "Nulla posuere rhoncus lorem, sit amet dapibus risus egestas in. Pellentesque at ante nec metus feugiat condimentum.",
  },
  {
    image: "images/courseImage.jpg",
    instructorName: "instructor 4",
    noOfSeats: "70 seats",
    duration: "4 years",
    courseTitle: "course-4",
    courseDescription:
      "Ut hendrerit et augue quis sodales. Vivamus sit amet magna sodales, tempor sapien vehicula, tempus ex.vestibulum felis ac, gravida mi. Curabitur auctor elit id euismod lobortis. In et ante ante.",
  },
];

export default function Courses() {
  const classes = useStyles();
  return (
    <Grid container className={classes.courses}>
      <Grid item className={classes.courseHeading}>
        <Typography variant="h4" component="h2">
          Our Courses
        </Typography>

        <Typography variant="body1" component="p">
          Vestibulum eget magna lobortis, tristique elit id, vestibulum nisl.
          Pellentesque congue urna enim, ac egestas neque scelerisque sed. Donec
          eu ultrices ex.
        </Typography>
      </Grid>
      <Grid item container className={classes.courseCards}>
        {courses.map((course) => {
          return (
            <Grid item className={classes.courseCard}>
              <div className={classes.courseImageContainer}>
                <img src={course.image} />
              </div>
              <Grid container className={classes.courseInfo}>
                <Grid item>
                  <Typography>{course.instructorName}</Typography>
                </Grid>
                <Grid item>
                  <Typography>{course.noOfSeats}</Typography>
                </Grid>
                <Grid item>
                  <Typography>{course.duration}</Typography>
                </Grid>
              </Grid>
              <div>
                <Typography variant="h6" component="h3">
                  {course.courseTitle}
                </Typography>
                <Typography>{course.courseDescription}</Typography>
              </div>

              <Button>Apply Now</Button>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}
