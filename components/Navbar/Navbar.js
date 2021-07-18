import { cloneElement } from "react";
import { AppBar, Button, Container, Toolbar, Box, Stack, Hidden, Fab } from "@material-ui/core"
import logo from '../../assets/images/react-logo.svg'
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import MenuIcon from '@material-ui/icons/Menu';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

function ElevationScroll({ children }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const Navbar = () => {
  return (
    <>
      <Hidden mdDown>
        <ElevationScroll >
          <AppBar elevation={0} sx={{ backgroundColor: 'background.default' }}>
            <Container>
              <Toolbar>
                <Box sx={{ flexGrow: 1 }}>
                  <Stack direction='row' spacing={8} >
                    <img src={logo.src} alt="react logo" />
                    <Box>
                      <Button>Home</Button>
                      <Button>Service</Button>
                      <Button>Features</Button>
                      <Button>Pricing</Button>
                      <Button>Contact</Button>
                    </Box>
                  </Stack>
                </Box>
                <Button sx={{ borderRadius: 300, boxShadow: 6 }} startIcon={<FlightTakeoffIcon />} variant='contained' color='secondary' size='large'>Sign Up</Button>
              </Toolbar>
            </Container>
          </AppBar>
        </ElevationScroll>
      </Hidden>
      <Hidden mdUp>
        <Fab sx={{ backgroundColor: 'background.default', position: 'fixed', top: '3%', right: '5%', zIndex: 'tooltip' }} >
          <MenuIcon />
        </Fab>
      </Hidden>
    </>
  )
}

export default Navbar
