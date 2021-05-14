import React from 'react';

const color = "yellowgreen" | "yellow" | "black" | "" ;
const icon = "anchor" | "home" | "thumb_up" | "" ;

export const Icon = ({ icon, color }) => {
    return <span className='material-icons' style={{color}}>
        {icon}
    </span>
}