import React from 'react'
import { v4 as uuidv4 } from 'uuid'

const TooltipContext = React.createContext()
export { TooltipContext }

export default function Tooltip({color="black", children}){
    const toolTipId = uuidv4();

    function handleMouseEnter(tooltip) {
        document.getElementById(tooltip).style.display = "grid"
    }

    function handleMouseLeave(tooltip) {
        // document.getElementById(tooltip).style.display = "none"
    }

    return (
        <TooltipContext.Provider value={{toolTipId, color}}>
            <span className="tooltip" onMouseEnter={()=>handleMouseEnter(toolTipId)} onMouseLeave={()=>handleMouseLeave(toolTipId)}>
                { children }
            </span>
        </TooltipContext.Provider>
    )
}