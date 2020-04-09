import React from 'react'
import {Row, Container, Col} from 'react-bootstrap'


class Links extends React.Component{
    render(){
        return(
            <div className = "Links">
               <Container>
                   <Row>
                       <Col>
                        <p><i className="fa fa-google fa-2x"></i></p>
                       </Col>
                       <Col>
                        <p><i className="fa fa-facebook fa-2x"></i></p>
                       </Col>
                       <Col>
                       <p><i className="fa fa-windows fa-2x"></i></p>
                       </Col>
                   </Row>
               </Container>
            </div>
        )
    }
}

export default Links