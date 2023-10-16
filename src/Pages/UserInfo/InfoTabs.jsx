import { useContext, useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import BioTab from './BioTab';
import SubmitInfo from './SubmitInfo';

const InfoTabs = () => {
  const { User } = useContext(AuthContext);
  const [UserInfoEmail, setUserInfoEmail] = useState([]);
  const [UserInfo, setUserInfo] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:2000/userInfoEmail`)
      .then((res) => res.json())
      .then((data) => {
        setUserInfoEmail(data);
      });
  }, []);

  useEffect(() => {
    if (UserInfoEmail.length > 0) {
      const matchingUser = UserInfoEmail.find(
        (user) => user.email === User?.email
      );
      
      if (matchingUser) {
        fetch(`http://localhost:2000/userInfoEmail?email=${matchingUser.email}`)
          .then((res) => res.json())
          .then((data) => {
            setUserInfo(data);
          });
      }
    }
  }, [UserInfoEmail, User]);

  return (
    <div className="mt-32">
      <Tabs className="w-full">
        <TabList className="w-full flex justify-evenly text-xl font-bold">
          <Tab>Bio</Tab>
          <Tab>My Feedbacks</Tab>
          <Tab>Submit Info</Tab>
        </TabList>
        <div className="w-full h-1 bg-sky-700"></div>
        <div className="mt-10">
          <TabPanel>
            <BioTab User={User} UserInfo={UserInfo} />
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <SubmitInfo />
          </TabPanel>
        </div>
      </Tabs>
    </div>
  );
};

export default InfoTabs;
