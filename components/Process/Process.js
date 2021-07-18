import { Box, Button, Container, Grid, Typography } from "@material-ui/core"
import SectionHeader from "../SectionHeader/SectionHeader"
import process from '../../assets/data/process'
import { Card } from "./Process.style"

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
