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
  backgroundColor: "red",
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
    <Stack spacing={2}>
      <TextField id="outlined-basic" label="Email" placeholder="Email" />
      <TextField
        id="outlined-basic"
        label="Password"
        placeholder="Enter password"
      />
      <GeoButton>Login</GeoButton>
    </Stack>
  );
}

export default LoginPortal;
