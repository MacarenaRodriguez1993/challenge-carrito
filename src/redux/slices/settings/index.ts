import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SettingState } from "../../../interface";

const initialState: SettingState = {
  themeMode: "light",
};
const settingSlice = createSlice({
  name: "setting",
  initialState,
  reducers: {
    setSettingTheme: (state, action: PayloadAction<string>) => {
      state.themeMode = action.payload;
    },
  },
});
export const { setSettingTheme } = settingSlice.actions;
export default settingSlice.reducer;
