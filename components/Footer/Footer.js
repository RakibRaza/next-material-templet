import { Box, Button, Container, Grid, Stack, Typography } from "@material-ui/core"
import MailIcon from '@material-ui/icons/Mail';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import styled from "@emotion/styled";
import Image from 'next/image'

const Hr = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  width: 70,
  height: 3
}))

const Footer = () => {
  return (
    <Box py={6} sx={{ backgroundColor: 'grey.900', color: '#fff' }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item md={6}>
            <Typography sx={{ fontWeight: 'bold' }} variant='h6'>About Us</Typography>
            <Hr />
            <Typography sx={{ my: 3 }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis perferendis rem, aut aliquam neque nam? dolor sit amet, consectetur adipisicing elit consectetur adipisicing elit. Officiis perferendis rem, aut aliquam.</Typography>
            <Button variant='contained' color='secondary'>Contact Us</Button>
          </Grid>
          <Grid item md={3}>
            <Typography sx={{ fontWeight: 'bold' }} variant='h6'>Contact</Typography>
            <Hr />
            <Stack direction='row' spacing={2} alignItems='center' sx={{ my: 3 }}>
              <MailIcon color='secondary' />
              <Box>
                <Typography sx={{ fontWeight: 'bold' }} >Email</Typography>
                <Typography>email@abc.com</Typography>
              </Box>
            </Stack>
            <Stack direction='row' spacing={2} alignItems='center' >
              <LocationOnIcon color='secondary' />
              <Box>
                <Typography sx={{ fontWeight: 'bold' }} >Adress</Typography>
                <Typography>Topoban, Akhalia Sylhet</Typography>
                <Typography>3114, BD</Typography>
              </Box>
            </Stack>
          </Grid>
          <Grid item md={3}>
            <Typography sx={{ fontWeight: 'bold' }} variant='h6'>Disclaimer</Typography>
            <Hr />
            <Typography sx={{ my: 3 }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis perferendis rem, aut aliquam neque nam?</Typography>
            <Image src="/social-linkedin.png" alt="facebook" width={24}
              height={24} />
            <Box component='span' sx={{ mx: 2 }} >
              <Image src="/social-twitter.png" alt="facebook" width={24}
                height={24} />
            </Box>
            <Image src="/social-facebook.png" alt="facebook" width={24}
              height={24} />
          </Grid>
        </Grid>
      </Container>
    </Box >
  )
}

export default Footer
