import { Box, Container, Typography, TextField, Button, InputAdornment } from "@material-ui/core"
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
const Subscribe = () => {
  return (
    <Box py={10} sx={{ backgroundColor: 'grey.100' }}>
      <Container maxWidth='md'>
        <Typography variant='h4' textAlign='center' sx={{ fontWeight: 'bold', mb: 4 }}>Subscribe & Request a demo</Typography>
        <TextField sx={{ '& .MuiOutlinedInput-root': { borderRadius: 300, backgroundColor: 'background.default', pl: 2 } }} fullWidth placeholder='Your Email:' InputProps={{
          endAdornment: <InputAdornment position="end"><Button sx={{ borderRadius: 300 }} startIcon={<FlightTakeoffIcon />} variant='contained' color='primary' size='large'>SUBSCRIBE</Button></InputAdornment>,
        }} />
      </Container>
    </Box>
  )
}

export default Subscribe
