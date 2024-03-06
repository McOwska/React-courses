import React from "react";
import styles from "./Header.module.css";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { CiSun } from "react-icons/ci";

const Header = (props) => {
  return (
    <div className={styles.header}>
      <CiSun className={styles.icon}/>
      <h1 className={styles.text}>Piece of light for every day...</h1>
      <AiOutlinePlusCircle onClick={props.onClick} className={styles.add} />
    </div>
  );
};

export default Header;
