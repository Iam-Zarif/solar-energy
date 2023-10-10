/* eslint-disable react/prop-types */

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
const DynamicProjectTab = ({ data }) => {
    
  console.log(data);
  return (
    <Tabs>
      <TabList className="w-full flex justify-between lg:text-xl font-bold">
        <Tab>System Integration & Fabrication</Tab>
        <Tab>Engineering and Design</Tab>
        <Tab>Field Support & Troubleshooting</Tab>
      </TabList>
<div className="w-full h-1 bg-slate-200"></div>
      <TabPanel>
        <h2>Any content 1</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel>
      <TabPanel>
        <h2>Any content 3</h2>
      </TabPanel>
    </Tabs>
  );
};

export default DynamicProjectTab;
