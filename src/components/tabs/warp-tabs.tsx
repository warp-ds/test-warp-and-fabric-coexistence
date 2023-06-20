import { Tabs, Tab, TabPanel } from '@warp-ds/react';

const WarpTabs = () => {
  const svgicon = (
    <svg
      width="16"
      height="14"
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5.33333 0.444444H15.1111C15.3469 0.444444 15.573 0.538095 15.7397 0.704794C15.9064 0.871493 16 1.09759 16 1.33333C16 1.56908 15.9064 1.79517 15.7397 1.96187C15.573 2.12857 15.3469 2.22222 15.1111 2.22222H5.33333C5.09759 2.22222 4.87149 2.12857 4.70479 1.96187C4.53809 1.79517 4.44444 1.56908 4.44444 1.33333C4.44444 1.09759 4.53809 0.871493 4.70479 0.704794C4.87149 0.538095 5.09759 0.444444 5.33333 0.444444ZM5.33333 5.77778H15.1111C15.3469 5.77778 15.573 5.87143 15.7397 6.03813C15.9064 6.20483 16 6.43092 16 6.66667C16 6.90241 15.9064 7.12851 15.7397 7.29521C15.573 7.46191 15.3469 7.55556 15.1111 7.55556H5.33333C5.09759 7.55556 4.87149 7.46191 4.70479 7.29521C4.53809 7.12851 4.44444 6.90241 4.44444 6.66667C4.44444 6.43092 4.53809 6.20483 4.70479 6.03813C4.87149 5.87143 5.09759 5.77778 5.33333 5.77778ZM5.33333 11.1111H15.1111C15.3469 11.1111 15.573 11.2048 15.7397 11.3715C15.9064 11.5382 16 11.7643 16 12C16 12.2357 15.9064 12.4618 15.7397 12.6285C15.573 12.7952 15.3469 12.8889 15.1111 12.8889H5.33333C5.09759 12.8889 4.87149 12.7952 4.70479 12.6285C4.53809 12.4618 4.44444 12.2357 4.44444 12C4.44444 11.7643 4.53809 11.5382 4.70479 11.3715C4.87149 11.2048 5.09759 11.1111 5.33333 11.1111ZM1.33333 5.33333C1.68696 5.33333 2.02609 5.47381 2.27614 5.72386C2.52619 5.97391 2.66667 6.31304 2.66667 6.66667C2.66667 7.02029 2.52619 7.35943 2.27614 7.60948C2.02609 7.85952 1.68696 8 1.33333 8C0.979711 8 0.640573 7.85952 0.390524 7.60948C0.140476 7.35943 0 7.02029 0 6.66667C0 6.31304 0.140476 5.97391 0.390524 5.72386C0.640573 5.47381 0.979711 5.33333 1.33333 5.33333ZM1.33333 10.6667C1.68696 10.6667 2.02609 10.8071 2.27614 11.0572C2.52619 11.3072 2.66667 11.6464 2.66667 12C2.66667 12.3536 2.52619 12.6928 2.27614 12.9428C2.02609 13.1929 1.68696 13.3333 1.33333 13.3333C0.979711 13.3333 0.640573 13.1929 0.390524 12.9428C0.140476 12.6928 0 12.3536 0 12C0 11.6464 0.140476 11.3072 0.390524 11.0572C0.640573 10.8071 0.979711 10.6667 1.33333 10.6667ZM1.33333 0C1.68696 0 2.02609 0.140476 2.27614 0.390524C2.52619 0.640573 2.66667 0.979711 2.66667 1.33333C2.66667 1.68696 2.52619 2.02609 2.27614 2.27614C2.02609 2.52619 1.68696 2.66667 1.33333 2.66667C0.979711 2.66667 0.640573 2.52619 0.390524 2.27614C0.140476 2.02609 0 1.68696 0 1.33333C0 0.979711 0.140476 0.640573 0.390524 0.390524C0.640573 0.140476 0.979711 0 1.33333 0Z"
        fill="#474445"
      />
    </svg>
  );
  return (
    <>
    <p>Example 1</p>
    <Tabs onChange={(e) => console.log(e)}>
      <Tab label="Tab 1" name="one" isActive />
      <Tab label="Tab 2" name="two" />
      <Tab label="Tab 3" name="three" />
    </Tabs>
    <TabPanel name="one">Panel 1 content</TabPanel>
    <TabPanel name="two">Panel 2 content</TabPanel>
    <TabPanel name="three">Panel 3 content</TabPanel>
    <p>Example 2</p>
    <div>
      <Tabs active="four">
        <Tab label="Tab 1" name="four" />
        <Tab label="Tab 2" name="five" />
        <Tab label="Tab 3" name="six" />
      </Tabs>
      <div className="mb-16">
        <TabPanel name="four">Panel 1 content</TabPanel>
        <TabPanel name="five">Panel 2 content</TabPanel>
        <TabPanel name="six">Panel 3 content</TabPanel>
      </div>
    </div>
    <p>Example isActive:</p>
    <Tabs>
      <Tab label="Tab 1" name="seven" isActive />
      <Tab label="Tab 2" name="eight" />
      <Tab label="Tab 3" name="nine" />
    </Tabs>
    <p>Example with icon:</p>
    <Tabs>
      <Tab label="Tab 1" name="ten" isActive>
        {svgicon}
      </Tab>
      <Tab label="Tab 2" name="eleven">
        {svgicon}
      </Tab>
      <Tab label="Tab 3" name="twelve">
        {svgicon}
      </Tab>
    </Tabs>
    <p>Example with icon over:</p>
    <Tabs>
      <Tab label="Tab 1" name="thirteen" over isActive>
        {svgicon}
      </Tab>
      <Tab label="Tab 2" name="fourteen" over>
        {svgicon}
      </Tab>
      <Tab label="Tab 3" name="fifteen" over>
        {svgicon}
      </Tab>
    </Tabs>
    <p>Example with contained:</p>
    <Tabs contained>
      <Tab label="Tab 1" name="one" isActive />
      <Tab label="Tab 2" name="two" />
      <Tab label="Tab 3" name="three" />
    </Tabs>
    <p>Example with contained icon:</p>
    <Tabs contained>
      <Tab label="Tab 1" name="one" isActive>
        {svgicon}
      </Tab>
      <Tab label="Tab 2" name="two">
        {svgicon}
      </Tab>
      <Tab label="Tab 3" name="three">
        {svgicon}
      </Tab>
    </Tabs>
    <p>Example with contained icon over:</p>
    <Tabs contained>
      <Tab label="Tab 1" name="one" over isActive>
        {svgicon}
      </Tab>
      <Tab label="Tab 2" name="two" over>
        {svgicon}
      </Tab>
      <Tab label="Tab 3" name="three" over>
        {svgicon}
      </Tab>
    </Tabs>
    </>
  );
};

export default WarpTabs;
