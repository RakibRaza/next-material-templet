import { Box, Button, Container, Grid, Paper, Typography } from "@material-ui/core"
import SectionHeader from "../SectionHeader/SectionHeader"
import AlarmIcon from '@material-ui/icons/Alarm';

import process from '../../assets/data/process'
import styled from "@emotion/styled";

const Card = styled(Paper)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  transition: 'all .4s ease-in-out',
  position: 'relative',
  overflow: 'hidden',
  padding: theme.spacing(4, 15),
  '& h5': {
    fontWeight: 'bold',
    marginBottom: theme.spacing(1)
  },
  '& svg': {
    fontSize: 200,
    position: 'absolute',
    left: '-80px',
    bottom: '-80px',
    transition: 'all .4s ease-in-out'
  },
  '&:hover': {
    boxShadow: theme.shadows[12],
    transform: 'translateY(-8px)',
    '& svg': {
      color: theme.palette.secondary.main,
      transform: 'translateY(-8px)'
    }
  }
}))
const Process = () => {
  return (
    <Box py={10}>
      <Container>
        <SectionHeader title='Integrate Your Process' subTitle='Access integrations and new features in a matter of seconds' />
        <Grid container spacing={4}>
          {process.map(({ id, title, desc, icon }) => <Grid key={id} item md={6}>
            <Card>
              <Typography variant='h5'>{title}</Typography>
              <Typography color='GrayText'>{desc}</Typography>
              {icon}
            </Card>
          </Grid>)}
        </Grid>
        <Box textAlign='center' mt={5}>
          <Button size='large' variant='contained' color='secondary'>Start Your Free Trial</Button>
        </Box>
      </Container>
    </Box>
  )
}

export default Process
