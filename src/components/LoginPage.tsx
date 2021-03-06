// import React from "react";
// import theme from "../theme";
import {
  Box,
  Button,
  Stack,
  Input,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";
import loginBackground from "../assets/geo-bg.jpeg";
import LoginPanel from "./LoginPanel";

const InputField = styled(TextField)({
  textTransform: "none",
});

const ParentDiv = styled("div")({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "100vh",
  backgroundImage: `url(${loginBackground})`,
  backgroundSize: "cover",
  boxShadow: "inset 0 0 0 2000px rgba(124, 104, 75, 0.75)",
});

function LoginPage() {
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
              width: "30%",
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
            <LoginPanel />
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

export default LoginPage;
