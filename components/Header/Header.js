import { Box, Button, Container, Grid, InputAdornment, TextField, Typography, Stack } from "@material-ui/core"
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import sideImg from '../../assets/images/2.svg'
import CheckIcon from '@material-ui/icons/Check';

const Header = () => {
  return (
    <Box py={13}>
      <Container>
        <Grid container spacing={4} alignItems='center' justifyContent='space-between'>
          <Grid item md={5}>
            <Typography sx={{ textShadow: '0 4px 4px rgb(0 0 0 / 22%)', fontWeight: 'bold' }} color='primary' variant='h3'>Better Management; Less Expense</Typography>
            <Typography sx={{ fontSize: 25, my: 3 }}>Not sure about Pro? Try trial first!</Typography>
            <Stack sx={{ mb: 3 }} direction='row' spacing={2}>
              <CheckIcon color='secondary' />
              <Typography>Unlimited Projects.</Typography>
            </Stack>
            <Stack sx={{ mb: 3 }} direction='row' spacing={2}>
              <CheckIcon color='secondary' />
              <Typography>Unlimited Team Members.</Typography>
            </Stack>
            <Stack sx={{ my: 3 }} direction='row' spacing={2}>
              <CheckIcon color='secondary' />
              <Typography>Unlimited Disk Space.</Typography>
            </Stack>
            <TextField sx={{ '& .MuiOutlinedInput-root': { borderRadius: 300, backgroundColor: 'background.default', pl: 2 } }} fullWidth placeholder='Your Email:' InputProps={{
              endAdornment: <InputAdornment position="end"><Button sx={{ borderRadius: 300 }} startIcon={<FlightTakeoffIcon />} variant='contained' color='secondary' size='large'>SUBSCRIBE</Button></InputAdornment>,
            }} />
          </Grid>
          <Grid item md={5}>
            <img src={sideImg.src} alt="Women with book" />
          </Grid>
        </Grid>
      </Container>
    </Box >
  )
}

export default Header
