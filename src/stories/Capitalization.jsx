import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// interface TabPanelProps {
//   children?: React.ReactNode;
//   index: number;
//   value: number;
// }

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
//
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Capitalization" {...a11yProps(0)} />
          <Tab label="Acronyms" {...a11yProps(1)} />
          <Tab label="Wayfinding" {...a11yProps(2)} />
          <Tab label="Accessibility Notes" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
          <h2>Capitalization</h2>
          <hr/>
          <h3>General Guidance</h3>
          <p>
            Use sentence case (only capitalize the first word and proper nouns and acronyms) in titles, headings, menu items, labels, and buttons.

            <h3>DO capitalize</h3>
            The first letter of the first word of any label or sentence (this sentence is an example!)

            Proper nouns (Maryland, Medicaid, John Smith)

            Titles of official publications, laws, or products (Alternative Benefit Plan, the Social Security Act, Gmail)

            <h3>DON’T capitalize</h3>

            <ul>
              <li>Words other than the first word, other than proper nouns</li>
              <li>Common nouns</li>
              <li>Specific processes or products (waivers, email)</li>
            </ul>
          </p>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <h2>Acronyms</h2>
          <hr/>
          <h3>General Guidance</h3>
          <p>
          Acronyms should almost always be in all capital letters. For exceptions, see word list (forthcoming).
          </p>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <h2>Wayfinding</h2>
          <hr/>
          <p>
          When providing step-by-step instructions on where to go to do something, capitalize the first word of the navigation labels in each step. 
          Example: To start a new SPA submission, go to Packages, then select New submission.
          </p>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <h2>Accessibility notes</h2>
          <hr/>
          <p>
          Using sentence case in labels and headers makes it easier to scan a page for categories of information. 
          It also makes it easier to distinguish between proper nouns and regular nouns.
          </p>
      </TabPanel>
    </Box>
  );
}