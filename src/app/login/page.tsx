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
import { Loading } from "@/components/Loading";

function LoginPage() {
  const { login } = useAuth();
  const [emailHelper, setEmailHelper] = useState("");
  const [passHelper, setPassHelper] = useState("");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const loggedIn = await login(email, password);
    if (!loggedIn) {
      setPassHelper("*email or pass might be incorrect");
    }

    setIsLoading(false);
  };

  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
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
            helperText={passHelper}
            value={password}
            sx={{
              input: (theme) => ({
                color: theme.palette.primary.main,
              }),
            }}
            onChange={(e) => {
              setPassHelper("");
              setPassword(e.target.value);
            }}
            required
            fullWidth
          />
          <Button
            variant="contained"
            type="submit"
            disabled={isLoading}
            sx={{
              height: 35,
            }}
            fullWidth
          >
            {isLoading ? <Loading size={30} /> : <>Login</>}
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

export default LoginPage;
