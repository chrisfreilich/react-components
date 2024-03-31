import React from 'react'

export default function Card({title, icon='/upload.png', bgColor="#3F75FE", children}){

    return (
        <div className="card">
            <div className="card-main">
                <div className="card-icon" style={{backgroundColor: bgColor}}><img src={icon}/></div>
                <h3>{title}</h3>
                <div className="card-text">{ children }</div>
            </div>
        </div>
    )
}