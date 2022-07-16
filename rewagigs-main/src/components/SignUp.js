import React from "react";
import {
  Avatar,
  Box,
  Button,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';

function SignUp() {
  const paperStyle = {
    padding: 20,
    height: "130vh",
    width: "100vh",
    margin: "10px auto",
  };
  const avatarStyle = { backgroundColor: "#0da2e9" };
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <PersonAddAltIcon />
          </Avatar>
          <h2>SignUp</h2>
        </Grid>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            "& > :not(style)": { m: 1 },
          }}
        >
          <TextField helperText="Firstname" label="FirstName" />
          <TextField helperText="Lastname " label="LastName" />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            "& > :not(style)": { m: 1 },
          }}
        >
          <TextField helperText="Contact number" label="Contact number" />
          <TextField helperText="Alternate number " label="Alternate number" />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            "& > :not(style)": { m: 1 },
          }}
        >
          <TextField helperText="Locality" label="Locality" />
          <TextField helperText="Pincode" label="Pincode" />
        </Box>
        <Box>
          <TextField helperText="Address" label="Complete Address" fullWidth />
        </Box>
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

        <Button variant="contained" type="submit" color="primary" fullWidth>
          Register
        </Button>
        <Typography marginTop={2}>
          Already have an account?
          <Link href="/login">SignIn</Link>
        </Typography>
      </Paper>
    </Grid>
  );
}

export default SignUp;
