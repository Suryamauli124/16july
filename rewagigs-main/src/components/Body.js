import {useNavigate} from 'react-router-dom'
import { Box, Button, MenuItem, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";


function Body() {
  const navigate = useNavigate()
  const [service, setService] = useState("");
  // console.log({ service });

  const [value1, setValue1] = useState("");
  // console.log({ value1 });

  const handleChange = (event) => {
    setService(event.target.value);
  };
  const handleChange1 = (event) => {
    setValue1(event.target.value);
  };

  return (
    <Stack sx={{ background: "#7ED321"}} marginTop={0.5} border='ActiveBorder'>
      <Box width="550px" marginLeft={50} marginTop={6}>
        <h1>Hire Best Professionals In Your Area</h1>
      </Box>
      <Box width="250px" marginLeft={65} marginTop={12}>
        <TextField
          label="Select service"
          select
          value={service}
          onChange={handleChange}
          fullWidth
        >
          <MenuItem value="P">Plumbing</MenuItem>
          <MenuItem value="R">Repairing</MenuItem>
          <MenuItem value="E">Electrician</MenuItem>
          <MenuItem value="D">Decoration</MenuItem>
        </TextField>
      </Box>

      <Box width="250px" marginLeft={65} marginTop={2}>
        <TextField
          label="Select Pincode To Hire"
          select
          value={value1}
          onChange={handleChange1}
          fullWidth
        >
          <MenuItem value="1">486001</MenuItem>
          <MenuItem value="2">486002</MenuItem>
          <MenuItem value="3">486003</MenuItem>
          <MenuItem value="4">486004</MenuItem>
        </TextField>
      </Box>
      <Box  marginLeft={65} marginTop={10}>
        <Button
          color="inherit"
          size="large"
          variant="contained"
          startIcon={<PersonSearchIcon />}
          onClick = {() => navigate('/sellercard')}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
}

export default Body;
