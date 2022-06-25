import { Typography, AppBar, Toolbar } from '@mui/material';

function Header() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Docserver
        </Typography>
       </Toolbar>
    </AppBar>
  );
}

export default Header
