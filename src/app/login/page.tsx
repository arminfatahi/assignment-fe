"use client";

import { useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import { Google } from "@mui/icons-material";
import { useAuth } from "@/context/AuthContext";
import withProtectedRoute from "@/lib/AuthWrapper";

function LoginPage() {
  const { login } = useAuth();
  const [emailHelper, setEmailHelper] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const loggedIn = await login(email, password);
    if (!loggedIn) {
      console.log("failed to log in");
    }
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        color="primary.main"
        sx={{
          width: 450,
          display: "flex",
          flexDirection: "column",
          border: "1px solid",
          borderColor: "divider",
          borderRadius: 2,
          boxShadow: 3,
          bgcolor: (theme) => `${theme.palette.background.default}`,
        }}
      >
        <Box
          sx={{
            p: 3,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          }}
        >
          <Typography variant="h3" align="center">
            <b>Welcome Back!</b>
          </Typography>
          <Typography align="center" marginTop={1}>
            Please enter your credentials to log in
          </Typography>
        </Box>

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            p: 3,
          }}
        >
          <TextField
            label="Email"
            type="email"
            helperText={emailHelper}
            value={email}
            sx={{
              input: (theme) => ({
                color: theme.palette.primary.main,
              }),
            }}
            onInvalid={() => setEmailHelper("*invalid email format")}
            onChange={(e) => {
              setEmailHelper("");
              setEmail(e.target.value);
            }}
            required
            fullWidth
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            sx={{
              input: (theme) => ({
                color: theme.palette.primary.main,
              }),
            }}
            onChange={(e) => setPassword(e.target.value)}
            required
            fullWidth
          />
          <Button variant="contained" type="submit" fullWidth>
            Login
          </Button>

          <Divider textAlign="center">or</Divider>

          <Button variant="outlined" startIcon={<Google />} fullWidth>
            Sign in with Google
          </Button>
        </Box>
      </Box>
    </Container>
  );
}

export default withProtectedRoute(LoginPage);
