import React from 'react'
import logoImg from '../images/react.png'




const imageStyle = {
    height:"200px",
    border:"white 2px solid"
}


class Logo extends React.Component{
    render()
    {
        return(
            <div className = "Logo">
                <img alt = "Pathways Bank Logo" className = "rounded-circle bg-dark" style = {imageStyle} src = {logoImg}/>
            </div>
        )
    }
}

export default Logo