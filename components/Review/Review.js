import { Avatar, Box, Button, Container, Grid, Paper, Stack, Typography } from "@material-ui/core"
import SectionHeader from "../SectionHeader/SectionHeader"

const Review = ({ reviews }) => {
  return (
    <Box py={10}>
      <Container>
        <SectionHeader title='We Are Trusted' subTitle='Access integrations and new features in a matter of seconds' />
        <Grid container spacing={4}>
          {reviews.map(({ id, title, desc, name, role, img }) => <Grid key={id} item md={6}>
            <Paper sx={{ borderRadius: 2, '&:hover': { boxShadow: 12 } }} p={4}>
              <Typography sx={{ fontWeight: 'bold', mb: 2 }} variant='h6'>{title}</Typography>
              <Typography color='GrayText' sx={{ mb: 2 }}>{desc}</Typography>
              <Stack spacing={2} alignItems='center' direction='row'>
                <Avatar
                  alt={name}
                  src={img}
                  sx={{ width: 56, height: 56 }}
                />
                <Box>
                  <Typography variant='subtitle2' sx={{ fontWeight: 'bold' }}>{name}</Typography>
                  <Typography variant='subtitle2'>{role}</Typography>
                </Box>
              </Stack>
            </Paper>
          </Grid>)}
        </Grid>
        <Box textAlign='center' mt={5}>
          <Button size='large' variant='contained' color='secondary'>View All Review</Button>
        </Box>
      </Container>
    </Box>
  )
}

export default Review
