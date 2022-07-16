import React from "react";
import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

function Login() {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#0da2e9" };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LoginIcon />
          </Avatar>
          <h2>SignIn</h2>
        </Grid>
        <TextField
          label="EmailId"
          helperText="Please enter your email"
        ></TextField>
        <br />

        <TextField
          label="Password"
          helperText="Enter your password"
          type="password"
        ></TextField>
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember Me"
          />
          <Button variant="contained" type="submit" color="primary" fullWidth>
            SignIn
          </Button>
          <Typography marginTop={2}>
            Don't have account?
            <Link href="#">
              SignUp
            </Link>
          </Typography>
        
      </Paper>
    </Grid>
  );
}

export default Login;
