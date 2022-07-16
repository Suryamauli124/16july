import React from "react";
import { AppBar, Stack, IconButton, Toolbar, Typography } from "@mui/material";
import HomeRepairServiceSharpIcon from "@mui/icons-material/HomeRepairServiceSharp";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <React.Fragment>
        <AppBar sx={{ background: "#063970" }} position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo"
            >
              <HomeRepairServiceSharpIcon />
            </IconButton>
            <Typography variant="h5" component="div" sx={{ flexGrow: 2 }}>
              VINDHYABANDHU
            </Typography>
            <Stack direction="row" spacing={2} >
              <Link to="/login" style={{ color:"#FFFFFF"}} ><h3>Login</h3></Link>
              <Link to="/signup" style={{ color:"#FFFFFF"}} ><h3>SignUp</h3></Link>
            </Stack>
          </Toolbar>
        </AppBar>

      </React.Fragment>
      
    </>
  );
};

export default Header;
