import React from "react";
import { Link } from "react-router-dom";
import { ProductState, SettingState } from "../../interface";
import { AppDispatch, RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import HomeIcon from "@mui/icons-material/Home";
import { Switch } from "@mui/material";
import { experimentalStyled as styled } from "@mui/material";
import { setSettingTheme } from "../../redux/slices/settings";

const ContainerStyled = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  padding: "1em 2em",
  backgroundColor: "#05053e",
  color: "#fff",
});
const Header: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { shoppingCart } = useSelector<RootState, ProductState>(
    (state) => state.product
  );
  const { themeMode } = useSelector<RootState, SettingState>(
    (state) => state.setting
  );
  const handleChangeTheme = (): void => {
    dispatch(setSettingTheme(themeMode === "dark" ? "light" : "dark"));
  };
  return (
    <>
      <ContainerStyled>
        <Link to={"/"}>
          <HomeIcon color="primary" fontSize="large" />
        </Link>
        <Switch onChange={handleChangeTheme} />
        <h5>{shoppingCart}#cart</h5>
      </ContainerStyled>
    </>
  );
};

export default Header;
