"use client";

import { useEffect, useState } from "react";

import { darkTheme, lightTheme } from "@/theme";
import { CssBaseline, ThemeProvider, useMediaQuery } from "@mui/material";
import { AuthProvider } from "@/shared/context";
import { ProjectsProvider } from "@/pages/dashboard/model/context";

type ProviderProps = {
  children: React.ReactNode;
};

export default function Provider({ children }: ProviderProps) {
  const [isHydrated, setIsHydrated] = useState(false);
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return null;
  }

  const theme = prefersDarkMode ? darkTheme : lightTheme;

  return (
    <AuthProvider>
      <ProjectsProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              background: `linear-gradient(to bottom, ${theme.palette.primary.main}, ${theme.palette.background.default})`,
            }}
          >
            {children}
          </div>
        </ThemeProvider>
      </ProjectsProvider>
    </AuthProvider>
  );
}
