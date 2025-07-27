"use client";

import LoginForm from "@/features/auth/ui/LoginForm";
import { Container } from "@mui/material";

export default function Login() {
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
      <LoginForm />
    </Container>
  );
}
