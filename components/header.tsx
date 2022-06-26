import { Typography, AppBar, Toolbar, useScrollTrigger, Slide } from '@mui/material';

interface Props {
  window?: () => Window;
  children: React.ReactElement;
}

function HideOnScroll(props: Props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });
  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

function Header() {
  return (
    <HideOnScroll>
      <AppBar>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Docserver
          </Typography>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
}

export default Header
