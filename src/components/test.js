import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

class Example extends React.Component{

    handleClick(id){
        // console.log(this.props.medic);
        this.props.onClick(id);
    };
    render()
    {
        return (
            <div>
                <Card>
                    <CardImg top width="100%"
                             src={this.props.medic.picture}
                             alt="Card image cap"/>
                    <CardBody>
                        <CardTitle>{this.props.medic.name}</CardTitle>
                        <CardSubtitle>Card subtitle</CardSubtitle>
                        <CardText>Some quick example text to build on the card title and make up the bulk of the card's
                            content.</CardText>
                        <Button onClick={() => this.handleClick(this.props.medic.id)}>Button</Button>
                    </CardBody>
                </Card>
            </div>

        );
    }
};



export default Example;