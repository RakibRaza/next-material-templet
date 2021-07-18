import { Box, Typography } from "@material-ui/core"

const SectionHeader = ({ title, subTitle }) => {
  return (
    <Box mb={4}>
      <Typography variant='h4' sx={{ fontWeight: 'bold', mb: 2 }}>{title}</Typography>
      <Typography color='GrayText'>{subTitle}</Typography>
    </Box>
  )
}

export default SectionHeader
