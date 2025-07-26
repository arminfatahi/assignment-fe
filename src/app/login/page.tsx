"use client";

import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Divider,
} from "@mui/material";
import { Google } from "@mui/icons-material";
import { Loading } from "@/components/Loading";
import { useLoginForm } from "@/hooks/useLoginForm";

function LoginPage() {
  const { email, password, isLoading, handleSubmit } = useLoginForm();

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
        <Box sx={{ p: 3 }}>
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
          sx={{ display: "flex", flexDirection: "column", gap: 3, p: 3 }}
        >
          <TextField
            label="Email"
            type="email"
            required
            value={email.value}
            onChange={email.onChange}
            helperText={email.helperText}
            onInvalid={() => email.setHelperText("*invalid email format")}
            fullWidth
            sx={{
              input: (theme) => ({
                color: theme.palette.primary.main,
              }),
            }}
          />
          <TextField
            label="Password"
            type="password"
            required
            value={password.value}
            onChange={password.onChange}
            helperText={password.helperText}
            fullWidth
            sx={{
              input: (theme) => ({
                color: theme.palette.primary.main,
              }),
            }}
          />
          <Button
            variant="contained"
            type="submit"
            fullWidth
            disabled={isLoading}
            sx={{ height: 35 }}
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
