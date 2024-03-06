import React from 'react'
import styles from './ModalOverlay.module.css'

const ModalOverlay = (props) => {
  return (
    <div>
      <div className={styles.backdrop}/>
      <dialog open={true} className={styles.modal}>
        {props.children}
      </dialog>
    </div>
  )
}

export default ModalOverlay