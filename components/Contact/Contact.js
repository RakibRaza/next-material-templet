import { Box, Container, Fab, TextField } from '@material-ui/core'
import React from 'react'
import SectionHeader from '../SectionHeader/SectionHeader'
import SendIcon from '@material-ui/icons/Send';
const Contact = () => {
  return (
    <Box py={10} sx={{ backgroundColor: 'grey.100' }}>
      <Container>
        <SectionHeader title='Send Us an Email' subTitle='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, error.' />
        <form>
          <TextField sx={{ mb: 2 }} fullWidth variant='standard' label='Name' />
          <TextField sx={{ my: 2 }} fullWidth variant='standard' label='Email' />
          <TextField sx={{ my: 2 }} fullWidth variant='standard' label='Subject' />
          <TextField sx={{ mt: 2, mb: 4 }} fullWidth variant='standard' label='Message' />
          <Fab color='primary' >
            <SendIcon />
          </Fab>
        </form>
      </Container>
    </Box>
  )
}

export default Contact
