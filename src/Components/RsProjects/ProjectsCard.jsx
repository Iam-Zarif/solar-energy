/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ProjectsCard = ({ project }) => {
  const { photo1, photo2, read_time, short_description, details_description } =
    project;

  return (
    <>
      <div className="mx-auto">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 140 }} image={photo2} title="green iguana" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    </>
  );
};

export default ProjectsCard;
