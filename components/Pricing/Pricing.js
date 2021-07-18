import { Box, Container, Typography, Switch, FormControlLabel, Grid, Paper, Button, Divider } from "@material-ui/core"
import { useState } from "react"

const Pricing = ({ pricing }) => {
  const [priceMonth, setPriceMonth] = useState(false)
  return (
    <Box py={10}>
      <Container>
        <Typography variant='h4' sx={{ fontWeight: 'bold', mb: 1 }}>Choose a Plan</Typography>
        <FormControlLabel sx={{ mb: 3 }} control={<Switch checked={priceMonth} onChange={() => setPriceMonth(!priceMonth)} defaultChecked />} label="Get up to 10% discount annually" />
        <Grid container spacing={3}>
          {pricing.map(({ id, title, subtitle, price, services }) => <Grid key={id} xs={12} sm={6} item md={3}>
            <Paper sx={{ borderRadius: 2, '&:hover': { boxShadow: 12 } }}>
              <Box sx={id === 2 ? { backgroundColor: 'primary.main', py: 2, color: '#fff', borderRadius: '8px 8px 0 0' } : { backgroundColor: 'grey.100', py: 2 }} textAlign='center'>
                <Typography gutterBottom>{title}</Typography>
                <Typography variant='body2'>{subtitle}</Typography>
              </Box>
              <Divider />
              <Box sx={{ '& > p,h4,button': { mb: 2 } }} textAlign='center'>
                <Typography variant='h4' sx={{ fontWeight: 'bold', mt: 2 }}>{priceMonth ? price[1] : price[0]}</Typography>
                {services.map((item, i) => <Typography key={i} variant='body2'>{item}</Typography>)}
                <Button variant='contained' color='secondary'>Choose</Button>
              </Box>
            </Paper>
          </Grid>)}

        </Grid>
      </Container>
    </Box >
  )
}

export default Pricing
