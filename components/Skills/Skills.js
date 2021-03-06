import { useState } from "react";
import { Box, Container, Tab, Tabs, Grid, Typography, Button } from "@material-ui/core"
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import skills from '../../assets/data/skills'
import Image from 'next/image'

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

const Skills = () => {
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
                  <Image src={img} alt={title} />
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
