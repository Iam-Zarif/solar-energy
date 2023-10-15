/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import TabOne from "./TabOne";
import TabTwo from "./TabTwo";
import TabThree from "./TabThree";
const DynamicProjectTab = ({ data }) => {
    

  return (
    <Tabs>
      <TabList className=" flex justify-between lg:text-xl font-bold">
        <Tab>System Integration & Fabrication</Tab>
        <Tab>Engineering and Design</Tab>
        <Tab>Field Support & Troubleshooting</Tab>
      </TabList>
<div className="w-full h-1 bg-slate-200"></div>
      <TabPanel>
        <TabOne/>
      </TabPanel>
      <TabPanel>
        <TabTwo />
      </TabPanel>
      <TabPanel>
        <TabThree/>
      </TabPanel>
    </Tabs>
  );
};

export default DynamicProjectTab;
