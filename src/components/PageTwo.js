import React from 'react';

import SideA from './SideA'
import SideB from './SideB'
import Forms from './Forms'
import Logo from './Logo'
import Links from './Links'

const pageStyle = {
    border:"1px white solid",
    backgroundColor:"rgb(66, 66, 69, .5)",
    borderRadius:"20px",
    height:"500px",
    display:"flex",
    justifyContent:"center"

}

class PageTwo extends React.Component{

    render(){
        return(
            <div className = "PageTwo">
                <div className = "Page" style = {pageStyle}>
                <div className = "container">
                    <div className = "row mb-4">
                        <div className = "col">
                                <Logo/>
                        </div>
                    </div>
                    <div className = "row mb-10">
                        <div className = "col">
                               <Forms/>
                        </div>
                    </div>
                    <div className = "row mb-7">
                        <div className = "col">
                               <Links/>
                        </div>
                    </div>
                   
                </div>
             
           
            </div>
            </div>
        )
    }
}

export default PageTwo