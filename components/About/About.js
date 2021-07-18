import { Box, Button, Container, Grid, Typography } from "@material-ui/core"
import Image from 'next/image'
import sideImg from '../../assets/images/1.svg'

const About = () => {
  return (
    <Box py={10} sx={{ backgroundColor: 'grey.100' }}>
      <Container>
        <Grid container spacing={4} justifyContent='space-between'>
          <Grid item xs={12} sm={12} md={5}>
            <Typography variant='h4' sx={{ fontWeight: 'bold', mb: 3 }}>Every business matters. We give you tools to succeed.</Typography>
            <Typography sx={{ mb: 3 }} color='GrayText'>Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte.</Typography>
            <Typography color='GrayText'>Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte. Vis mutat altera percipit ad, ipsum prompta ius eu. Sanctus appellantur vim ea.</Typography>
            <Button sx={{ mt: 4 }} variant='contained' color='secondary'>Try it free</Button>
          </Grid>
          <Grid item xs={12} sm={12} md={5}>
            <Image src={sideImg} alt="Women with book" />
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default About
