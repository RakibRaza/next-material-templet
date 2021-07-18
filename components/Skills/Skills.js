import { useState } from "react";
import { Box, Container, Tab, Tabs, Grid, Typography, Button } from "@material-ui/core"
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

function TabPanel({ children, value, index, }) {
  return (
    <div>
      {value === index && (
        <Box sx={{ py: 5 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const Skills = ({ skills }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box py={10} sx={{ backgroundColor: 'grey.100' }}>
      <Container>
        <Box sx={{ width: '100%' }}>
          <Box >
            <Tabs sx={{ '& button': { px: 6 } }} value={value} onChange={handleChange}>
              <Tab label="LOGIN" />
              <Tab label="DASHBOARD" />
              <Tab label="CALENDAR" />
            </Tabs>
          </Box>
          {skills.map(({ id, title, desc1, desc2, img }, index) => <TabPanel key={id} value={value} index={index}>
            <Grid container spacing={4} alignItems='center'>
              <Grid item md={5}>
                <Box sx={{ boxShadow: 1 }}>
                  <img style={{ width: '100%', display: 'block' }} src={img} alt="login" />
                </Box>
              </Grid>
              <Grid item md={5}>
                <Typography variant='h5' sx={{ fontWeight: 'bold', mb: 3 }}>{title}</Typography>
                <Typography sx={{ mb: 3 }} color='GrayText'>{desc1}</Typography>
                <Typography color='GrayText'>{desc2}</Typography>
                <Button sx={{ mt: 2, pl: 0 }} endIcon={<NavigateNextIcon />} color='primary'>View details</Button>
              </Grid>
            </Grid>
          </TabPanel>)}

        </Box>
      </Container>
    </Box>
  )
}

export default Skills
