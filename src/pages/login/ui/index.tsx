"use client";

import { Container } from "@mui/material";
import LoginForm from "./LoginForm";

export function Login() {
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
