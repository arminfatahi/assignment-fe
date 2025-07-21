import { ThemeProvider } from "@mui/material/styles";
import { ThemeProvider as NextThemeProvider } from "next-themes";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <NextThemeProvider attribute="class" defaultTheme="system">
          <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
        </NextThemeProvider>
      </body>
    </html>
  );
}
