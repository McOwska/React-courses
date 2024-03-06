import { FcLike, FcLikePlaceholder } from "react-icons/fc";
import styles from "./Like.module.css";
import { useState } from "react";

interface LikeProps {
    onClick: () => void
}

const Like = ({onClick}: LikeProps) => {
    const [status, setStatus] = useState(false);

    const toggleLike = () => {
        setStatus(!status);
        onClick();
    }

    if(status){
        return <FcLike size={50} onClick={toggleLike}/>
    }
    else{
        return <FcLikePlaceholder size={50} onClick={toggleLike}/>
    }
    
};

export default Like;