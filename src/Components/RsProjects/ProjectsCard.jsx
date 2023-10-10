/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { AwesomeButton } from "react-awesome-button";
import { FiArrowRightCircle } from "react-icons/fi";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const ProjectsCard = ({ project }) => {
  const { _id, photo1, photo2, read_time, short_description, details_description } =
    project;

  // Split details_description into words using spaces as separators
  const words = details_description.split(" ");

  // Check if there are more than 20 words
  const truncatedSentence =
    words.length > 15
      ? words.slice(0, 15).join(" ") + "..."
      : details_description;

  return (
    <>
      <div className="mx-auto">
        <Card
          sx={{ maxHeight: 700, maxWidth: 400 }}
          className="lg:h-full relative"
        >
          <CardMedia
            className=" h-96"
            sx={{ height: 220 }}
            image={photo2}
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom component="div">
              <div className="flex gap-3 items-center">
                <button className="">
                  <AwesomeButton className="">Solar</AwesomeButton>
                </button>
                <p className="text-sky-700 font-semibold">
                  {read_time} min read
                </p>
              </div>
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <p className="text-xl font-bold mt-4">{short_description}</p>
              <p>{truncatedSentence}</p>
              <p></p>
            </Typography>
            <div className="">
              {" "}
              <Link to={`/residentialSolar/${_id}`}>
              <Button
                className="text-black flex gap-2 mt-2 w-full"
                variant="outlined"
              >
                <span className="font-semibold">Read More</span>{" "}
                <FiArrowRightCircle size={20} />
              </Button>
              </Link>
            </div>{" "}
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ProjectsCard;
