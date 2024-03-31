import React from 'react'

export default function Badge({children="Badge", color="gray", shape="square"}){
    const className = `badge ${color} ${shape}`
    return (
        <div className={className}>
            { children }
        </div>
    )
}