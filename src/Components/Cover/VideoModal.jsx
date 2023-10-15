/* eslint-disable react/prop-types */
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Iframe from 'react-iframe'
import photo from "../../assets/media/modalPhoto.png"
const VideoModal = ({ open, handleClose }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",

    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <div>
      <Modal className="w-full"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="h-5/6 w-4/5 ">
          <Typography id="modal-modal-title" variant="h6" component="h2">
           <p>The Details</p>
          </Typography>
         
           
          <Iframe url={photo}
        
        id=""
        className="w-full h-5/6 "
        display="block"
        position="relative"/>
          
        </Box>
      </Modal>
    </div>
  );
};

export default VideoModal;
