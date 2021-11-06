import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Input from "@mui/material/Input";
import { TextField } from "@mui/material";
import { NONAME } from "dns";

const GeoButton = styled(Button)({
  color: "#7C684B",
  // fontWeight: "700",
  // backgroundColor: "red",
  padding: 10,
  textTransform: "none",
});

const InputField = styled(TextField)({
  textTransform: "none",
});

function LoginPortal() {
  return (
    <Box>
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
          <InputField id="outlined-basic" label="email" placeholder="email" />
          <InputField
            id="outlined-basic"
            label="password"
            placeholder="enter password"
          />
          <GeoButton variant="contained">login</GeoButton>
        </Stack>
      </Box>
    </Box>
  );
}

export default LoginPortal;
