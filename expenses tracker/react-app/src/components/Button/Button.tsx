import React, { Children } from 'react'
import styles from './Button.module.css'

interface ButtonProps {
    children: string,
    handleOnClick: () => void,
    color?: string
}

const Button = ({children, handleOnClick, color="primary"}: ButtonProps) => {
  return (
    <div className={styles.btn} onClick={handleOnClick}>{children}</div>
  )
}

export default Button;