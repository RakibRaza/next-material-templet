import { Box, Container, Grid, Typography } from "@material-ui/core"
import SectionHeader from "../SectionHeader/SectionHeader"
import { Icon } from "./Business.style"
import business from '../../assets/data/business'

const Business = () => {
  return (
    <Box py={10}>
      <Container>
        <SectionHeader title='Grow Your Business' subTitle='Access integrations and new features in a matter of seconds' />
        <Grid container spacing={4}>
          {business.map(({ id, title, icon }) => <Grid key={id} item xs={12} sm={6} md={3} textAlign='center'>
            <Icon>
              {icon}
            </Icon>
            <Typography color='GrayText'>{title}</Typography>
          </Grid>)}
        </Grid>
      </Container>
    </Box>
  )
}

export default Business
