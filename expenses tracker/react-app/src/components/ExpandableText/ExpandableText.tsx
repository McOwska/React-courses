import React, { useState } from 'react'

interface Props{
    children: string,
    maxChars?: number,
}


const ExpandableText = ({children, maxChars=100}: Props) => {
//   return (
//     {children.length > maxChars ? <div>{children.substring(0, maxChars)}...</div> : <div>{children}</div>}
//   )
const [isExpanded, setExpanded] = useState(false);
if (children.length <= maxChars) return <div>{children}</div>;

const text = isExpanded? children : children.substring(0, maxChars) + '...';

return <div>{text}<button onClick={()=> setExpanded(!isExpanded)}>{isExpanded? 'Less' : 'More'}</button></div>
}

export default ExpandableText