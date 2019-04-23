import React from 'react'
import axios from 'axios'
import {Button, Col, Form, FormGroup, Input, Label} from "reactstrap";

class Register extends React.Component{

    register = () => {
        debugger;
        let username = document.getElementById("id_name").value;
        let email = document.getElementById("id_email").value;
        let password1 = document.getElementById("id_password1").value;
        let password2 = document.getElementById("id_password2").value;
        if ( password1 !== password2 ){
            document.getElementById("id_eroare").innerHTML="parolele nu corespund";
        }else {

            let data = {
                username:username,
                email:email,
                password:password1
            };
            axios({
                method: 'post',
                url: 'http://localhost/php/register.php',
                data: data,
                headers: { 'Content-Type': 'application/json' }
            }).then((response) => {

                console.log(response);
                if ( response.data[0].response === "OK" || response.data[0].response === "loggedin"){
                    this.props.history.push("/profile/" + response.data[0].id);
                    // window.location.reload();
                } else {
                    alert("Wrong credentials");
                }

            });
        }

    };

    render() {
        return(<Form>
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
                        <Input type="password" name="password" id="id_password1" placeholder="password placeholder" />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for="examplePassword" sm={2}>Password</Label>
                    <Col sm={10}>
                        <Input type="password" name="password" id="id_password2" placeholder="password placeholder" />
                    </Col>
                </FormGroup>
                <FormGroup check row>
                    <Col sm={{ size: 10, offset: 2 }}>
                        <Button onClick={() => this.register()}>Submit</Button>
                    </Col>
                </FormGroup>
                <div id="id_eroare"/>
            </Form>
        )
    }
}
export default Register;