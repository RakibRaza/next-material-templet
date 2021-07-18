import styled from "@emotion/styled";
import { Paper } from "@material-ui/core";

export const Card = styled(Paper)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  transition: 'all .4s ease-in-out',
  position: 'relative',
  overflow: 'hidden',
  padding: theme.spacing(4, 15),
  '@media (max-width: 768px )': {
    padding: theme.spacing(4),
  },
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