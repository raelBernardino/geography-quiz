import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Input from "@mui/material/Input";
import { TextField } from "@mui/material";

const GeoButton = styled(Button)({
  color: "#7C684B",
  // fontWeight: "700",
  // backgroundColor: "red",
  padding: 10,
});

const LoginPanel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
`;

function LoginPortal() {
  return (
    <Box
      sx={{
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        padding: 5,
        borderRadius: 2,
        border: 1,
        borderColor: "#BFAD93",
      }}
    >
      <Stack spacing={2}>
        <TextField id="outlined-basic" label="Email" placeholder="Email" />
        <TextField
          id="outlined-basic"
          label="Password"
          placeholder="Enter password"
        />
        <GeoButton variant="contained">Login</GeoButton>
      </Stack>
    </Box>
  );
}

export default LoginPortal;
