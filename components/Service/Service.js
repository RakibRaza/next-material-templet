import styled from "@emotion/styled";
import { Box, Container, Grid, Typography, Button, Paper } from "@material-ui/core"

import services from '../../assets/data/service'
const Icon = styled(Box)(({ theme }) => ({
  width: 56,
  height: 56,
  border: `2px solid ${theme.palette.secondary.main}`,
  margin: `0 auto ${theme.spacing(2)}`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  backgroundColor: 'rgb(255, 238, 216)',
}))

const Service = () => {
  return (
    <Box py={10} sx={{ backgroundColor: 'grey.100' }}>
      <Container>
        <Grid container spacing={4} alignItems='center'>
          <Grid item xs={12} sm={12} md={6}>
            <Grid container spacing={4}>
              {services.map(({ id, title, icon }) => <Grid key={id} item xs={12} sm={6}>
                <Paper sx={{ borderRadius: 2, '&:hover': { boxShadow: 12 } }} p={4} textAlign='center'>
                  <Icon>
                    {icon}
                  </Icon>
                  <Typography color='GrayText'>{title}</Typography>
                </Paper>
              </Grid>)}
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Typography variant='h4' sx={{ fontWeight: 'bold', mb: 3 }}>Made by business people for business people</Typography>
            <Typography sx={{ mb: 3 }} color='GrayText'>Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte. Lorem ipsum dolor sit amet,</Typography>
            <Typography color='GrayText'>vim quidam blandit voluptaria no, has eu lorem convenire incorrupte. Vis mutat altera percipit ad, ipsum prompta ius eu. Sanctus appellantur vim ea. Dolorem delicata vis te, aperiam nostrum ut per.</Typography>
            <Button sx={{ mt: 4 }} variant='contained' color='secondary'>Try it free</Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

export default Service
