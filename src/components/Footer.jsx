import { Typography, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function Footer() {
  const theme = useTheme();
  return (
    <Box
      component="footer"
      sx={{
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: theme.palette.background.paper,
        textAlign: "center",
        py: 2,
        mt: 2,
        zIndex: theme.zIndex.appBar,
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} | Artwork generated with AI by Mostafa Elbehery
      </Typography>
    </Box>
  );
}

export default Footer;
