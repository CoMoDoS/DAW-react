import React from 'react'
import '../css/Profile.css'
import axios from 'axios'
import { Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import Cookies from 'universal-cookie';
const cookies = new Cookies();


class Profile extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            email: "",
            password:"",
            type:"",
            name:"",
            problem:"",
            image:""
        };
        this.componentDidMount = this.componentDidMount.bind(this);

    }


    componentDidMount() {
        var a = cookies.get("PHPSESSID");

        if ( a != null) {
            axios.get(`http://localhost/php/getUserById.php?id=` + this.props.match.params.id)
                .then(res => {

                    console.log(res);
                    var aux = {
                        id: res.data[0].id,
                        email: res.data[0].email,
                        password: res.data[0].password,
                        type: res.data[0].type,
                        name: res.data[0].name,
                        problem: res.data[0].problem,
                        image: res.data[0].image
                    };
                    this.setState(aux);
                    document.getElementById("id_email").value = this.state.email;
                    document.getElementById("id_name").value = this.state.name;
                    document.getElementById("id_password").value = this.state.password;
                });
        } else {
            this.props.history.push("/login");
        }
    }

    handleSubmit = () => {
        var data = {
            email : document.getElementById("id_email").value,
            name : document.getElementById("id_name").value,
            password : document.getElementById("id_password").value,
            problem : document.getElementById("id_problem").value,
            image : document.getElementById("id_image").value
        };
        debugger;
        console.log(data);

    };


    render() {
        return(
            <div className="container">
                <div className="fb-profile">
                    <img align="left" className="fb-image-lg" src="/images/banner-bg.jpg"
                         alt="Profile example"/>
                    <img align="left" className="fb-image-profile thumbnail"
                         src={this.state.image} alt="Profile example" style={{height: '140px', width: '170px', borderRadius: '46px'}}/>
                    <div className="fb-profile-text">
                        <h1>{this.state.name}</h1>

                    </div>
                </div>
                <Form>
                    <FormGroup row>
                        <Label for="exampleName" sm={2}>Name</Label>
                        <Col sm={10}>
                            <Input type="text" name="email" id="id_name" placeholder="with a placeholder" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleEmail" sm={2}>Email</Label>
                        <Col sm={10}>
                            <Input type="text" name="email" id="id_email" placeholder="with a placeholder"/>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="examplePassword" sm={2}>Password</Label>
                        <Col sm={10}>
                            <Input type="password" name="password" id="id_password" placeholder="password placeholder" />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="exampleSelect" sm={2}>Problem</Label>
                        <Col sm={10}>
                            <Input type="select" name="select" id="id_problem" >
                                <option>{this.state.problem}</option>
                                <option>Inima</option>
                                <option>Maini</option>
                                <option>Stomac</option>
                                <option>Picioare</option>
                            </Input>
                        </Col>
                    </FormGroup>

                    <FormGroup row>
                        <Label for="exampleFile" sm={2}>Image</Label>
                        <Col sm={10}>
                            <Input type="file" name="file" id="id_image" />
                            <FormText color="muted">
                                Chose an image.
                            </FormText>
                        </Col>
                    </FormGroup>

                    <FormGroup check row>
                        <Col sm={{ size: 10, offset: 2 }}>
                            <Button onClick={() => this.handleSubmit()}>Submit</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }

}
export default Profile;