import { Box, Container, Grid, Typography } from "@material-ui/core"
import SectionHeader from "../SectionHeader/SectionHeader"

import business from '../../assets/data/business'

const Business = () => {

  return (
    <Box py={10}>
      <Container>
        <SectionHeader title='Grow Your Business' subTitle='Access integrations and new features in a matter of seconds' />
        <Grid container spacing={4}>
          {business.map(({ id, title, icon }) => <Grid key={id} item xs={12} sm={6} md={3} textAlign='center'>
            <Box sx={{ width: 112, height: 112, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', mx: 'auto', mb: 2, transition: 'all .25s ease-in-out', '&:hover': { boxShadow: 12, color: 'primary.main' } }}>
              {icon}
            </Box>
            <Typography color='GrayText'>{title}</Typography>
          </Grid>)}
        </Grid>
      </Container>
    </Box>
  )
}

export default Business
