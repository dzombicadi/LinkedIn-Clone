import React from "react";
import "./HeaderOption.css";
import Avatar from "@mui/material/Avatar";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className="headerOption">
      {/* Ikonica ce se prikazati SAMO AKO joj se doda vrijednost u Header.js fajlu */}
      {/* && - Ako se dodijeli vrijednost Icon i avatar ili je vrijednost tacna!, tek onda dolazi do stvaranja ovih linija koda */}
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && (
        // BUG FIX
        <Avatar className="headerOption__icon" src={user?.photoUrl}></Avatar>
      )}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
