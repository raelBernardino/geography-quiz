import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Input from "@mui/material/Input";
import { TextField, Typography } from "@mui/material";
import { NONAME } from "dns";
import theme from "../theme";
import { palette } from "@mui/system";

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

const ParentDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-image: url("https://images.unsplash.com/photo-1579818191104-014df427aa52?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1180&q=80");
  background-size: cover;
  box-shadow: inset 0 0 0 2000px rgba(124, 104, 75, 0.75);
`;

function LoginPortal() {
  const welcomeText = "Welcome \n to Geogrow";
  return (
    <ParentDiv>
      <Box display="flex" alignItems="center">
        <Stack
          display="flex"
          justifyContent="center"
          direction="row"
          spacing={8}
        >
          <Box
            sx={{
              boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
              padding: 5,
              borderRadius: 2,
              border: 1,
              borderColor: "#BFAD93",
              backgroundColor: "white",
              width: "30%"
            }}
          >
            <Typography
              variant="h2"
              fontWeight="fontWeightMedium"
              whiteSpace="pre-line"
              marginBottom="12px"
              textAlign="center"
              color="primary.dark"
            >
              {welcomeText}
            </Typography>
            <Stack spacing={2}>
              <InputField
                id="outlined-basic"
                label="username"
                placeholder="username"
              />
              <InputField
                id="outlined-basic"
                label="email"
                placeholder="email"
              />
              <InputField
                id="outlined-basic"
                label="password"
                placeholder="enter password"
              />
              <GeoButton variant="contained">login</GeoButton>
            </Stack>
          </Box>
          <Stack spacing={2} width="50%" display="flex" justifyContent="center">
            <Typography
              variant="h2"
              fontWeight="fontWeightMedium"
              color="primary"
            >
              geogrow
            </Typography>
            <Typography
              variant="h1"
              fontWeight="fontWeightMedium"
              color="secondary"
            >
              A tool to help you grow your geographical knowledge.
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </ParentDiv>
  );
}

export default LoginPortal;
