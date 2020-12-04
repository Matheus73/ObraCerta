import React, { Component } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import api from '../../services/api';
import Footer from '../../components/Footer';
import GlobalStyle from './styles';
import Space from '../../components/Space';
import Alert from '../../components/Alert';
import Navbar from '../../components/Navbar';
import {FaRegSadCry} from 'react-icons/fa';

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            password: '',
            err: ''
        }

        this.url = '/usuario/' + localStorage.getItem('idUsuario')

        this.userData = {
            senha: '',
        }
    }

    handlePasswordChange = event => {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.userData.senha = this.state.password;

        api.delete(this.url, {
            headers: {
                Authorization: localStorage.getItem('token')
            },
                data: {
                    senha: this.state.password
                }
        })
            .then(response => {
                console.log(response);
                localStorage.clear();
                this.props.history.push('/');
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        const {password, err } = this.state
        return (
            <>
                <GlobalStyle />
            <Navbar type='third'/>
                <main>
                    <h1>Deletar conta</h1>
                    <form onSubmit={this.handleSubmit}>
                        <p>Sentimos muito em perder a sua companhia!<FaRegSadCry /></p>
                        <Space/>
                        <Space/>
                        
                        <Space />
                        <label> Confirme sua senha:
                        <Input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Confirme sua senha"
                                value={password}
                                onChange={this.handlePasswordChange}
                            />
                        </label>
                        <Space />
                        <div>
                            <Space />
                            <Button>Enviar</Button>
                        </div>
                        <Alert>{err}</Alert>
                    </form>
                </main>
                <Footer orange />
            </>
        )
    }
}

export default Login
