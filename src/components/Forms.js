import React from 'react'
import {Button, Form, FormControl} from 'react-bootstrap'
import Navigation from './Navigation'
const searchBarStyle = {
width:"200px",
border:"1px white solid",
backgroundColor:"rgb(66,66,66, .6",
color:"white"
}
const buttonStyle = {
    width:"200px",
    border:"1px white solid"
}


function Forms(){

    return(
       
        <div> 
         <Form>
          <div className = "container" >
              <div className = "row mb-4">
                  <div className = "col">
                  <FormControl className = "formA" style = {searchBarStyle} placeholder = "Name"/>

                  </div>
              </div>
              <div className = "row mb-4">
                  <div className = "col">
                  <FormControl className = "formA" type = "password" style = {searchBarStyle} placeholder = "Password"/>


                  </div>
              </div>
              <div className = "row mb-4">
                  <div className = "col">

                  <Button style = {buttonStyle} className = "lead" variant = "secondary">Sign In</Button>
           
                  </div>
              </div>
              <div className = "row mb-4">
                  <div className = "col">

                  <Button style = {buttonStyle} className = "lead" variant = "secondary">Create User</Button>
           
                  </div>
              </div>
          </div>
          

            
         </Form>
        
           

        </div> 
    
    )



}

export default Forms