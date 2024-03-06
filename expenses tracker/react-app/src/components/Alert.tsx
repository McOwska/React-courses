import { ReactNode } from "react";

interface AlertProps {
    children: ReactNode;
    onClose: () => void;
}

const Alert = ({children, onClose}: AlertProps) => {
  let isClicked = false;
  if(!isClicked){
    return (
      <div className="alert alert-primary alert-dismissible">
        {children}
        <button onClick = {onClose} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    )
  }else{
    return (
      <div></div>
    )
  }
  
}

export default Alert