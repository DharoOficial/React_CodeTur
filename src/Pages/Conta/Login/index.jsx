  
import React, { useState } from 'react';
import {useFormik} from 'formik';
import { Container, Form, Button } from 'react-bootstrap'
import Menu from '../../../components/menu'
import Rodape from '../../../components/rodape'
import './index.css';

import UsuarioService from '../../../Sevices/UsuarioService'

const Login = () => {

    const formik = useFormik({
        initialValues :{
            email : '',
            senha : ''
        },
        onSubmit : values => {
            alert(JSON.stringify(values))
            UsuarioService.logar(values)
            .then(resultado => resultado.json())
            .then(resultado => {
                console.log(JSON.stringify(resultado.data))
            })
            .catch(error =>{
                console.error('erro na api : ' + error)
            })
        }
    });

return (
    <div>
        <Menu />
        <Container className='form-height'>
            <Form className='form-signin' onSubmit={formik.handleSubmit}>
                <div className='text-center'>
                 {/* <img src={logo} alt='NYOUS' style={{ width : '64px'}} /> */}
                </div>
                <br/>
                <small>Informe os dados Abaixo</small>
                <hr/>
                <Form.Group >
                    <Form.Label>Email </Form.Label>
                    <Form.Control type="email" placeholder="Informe o email" name="email" value={formik.values.email} onChange={formik.handleChange} required />
                </Form.Group>

                <Form.Group >
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" placeholder="Senha" name="senha" value={formik.values.senha} onChange={formik.handleChange}     required/>
                </Form.Group>
                <Button variant="primary" type="submit" >
                    Enviar
                </Button>
                <br/><br/>
                <a href='/resetar-senha' style={{ marginTop :'30px'}}>Não tenho conta!</a>
            </Form>
        </Container>
        <Rodape />
    </div>
)

}

export default Login;