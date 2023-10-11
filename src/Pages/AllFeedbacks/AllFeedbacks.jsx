/* eslint-disable no-unused-vars */
import { useContext } from "react";
import HomeFooter from "../../Shared/Footer/HomeFooter";
import HomeNavbar from "../../Shared/Navbar/HomeNavbar";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AllFeedbacks = () => {
    const {User} = useContext(AuthContext)
  return (
    <div>
      <HomeNavbar />

      <HomeFooter />
    </div>
  );
};

export default AllFeedbacks;
