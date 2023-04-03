import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {} from "@mui/material/StyledEngineProvider";
import { StyledEngineProvider } from "@mui/styled-engine-sc";
import { RootState } from "../redux/store";
import { SettingState } from "../interface";
import { useSelector } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";
interface Props {
  children: React.ReactNode;
}
const MuiThemeProvider: React.FC<Props> = ({ children }) => {
  const { themeMode } = useSelector<RootState, SettingState>(
    (state) => state.setting
  );
  const isLight = themeMode === "light";
  const theme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      secondary: {
        main: "#333",
      },
      mode: isLight ? "light" : "dark",
    },
  });
  return (
    <StyledEngineProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default MuiThemeProvider;
