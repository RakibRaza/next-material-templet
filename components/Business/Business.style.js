import styled from "@emotion/styled"
import { Box } from "@material-ui/core"

export const Icon = styled(Box)(({ theme }) => ({
  width: 112,
  height: 112,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '50%',
  margin: '0 auto',
  marginBottom: theme.spacing(2),
  transition: 'all .25s ease-in-out',
  '&:hover': {
    boxShadow: theme.shadows[12],
    color: theme.palette.primary.main
  }
}))