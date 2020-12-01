import React, { Component } from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import axios from 'axios';
import api from '../../services/api';
import Footer from '../../components/Footer';
import GlobalStyle from './styles';
import Space from '../../components/Space';
import Alert from '../../components/Alert';
import Navbar from '../../components/Navbar';

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: '',
            err: ''
        }

        this.url = '/login'

        this.userData = {
            senha: '',
            email: ''
        }
    }

    handleEmailChange = event => {
        this.setState({
            email: event.target.value
        })
    }

    handlePasswordChange = event => {
        this.setState({
            password: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        this.userData.email = this.state.email;
        this.userData.senha = this.state.password;

        api.post(this.url, this.userData)
            .then(response => {
                this.props.handleLogin(response.data.dados);
                // console.log(response)
                localStorage.setItem("token",response.data.token);
                localStorage.setItem("loggedIn","LOGGED_IN");
                localStorage.setItem("idUsuario",response.data.dados.idUsuario);
                localStorage.setItem("name",response.data.dados.nomeCompleto);
                localStorage.setItem("email",response.data.dados.email);
                localStorage.setItem("telefone",response.data.dados.telefone);
                localStorage.setItem("localidade",response.data.dados.localidade);
                localStorage.setItem("descricao",response.data.dados.descricao);
                localStorage.setItem("categoria",response.data.dados.categoria);
                localStorage.setItem("imagemPerfil",response.data.dados.imagemPerfil);
                this.props.history.push('/');
            })
            .catch(error => {
                console.log(error)
                this.setState({
                    err: "O usuário não existe ou a senha está incorreta"
                })
            })
    }

    render() {
        const { email, password, err } = this.state
        return (
            <>
                <GlobalStyle />
            <Navbar type='third'/>
                <main>
                    <h1>Login</h1>
                    <form onSubmit={this.handleSubmit}>
                        <p>Entre para encontrar os melhores profissionais para sua obra ou para divulgar o seu trabalho!</p>
                        <Space />
                        <label>Email:
                        <Input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Digite seu email"
                                value={email}
                                onChange={this.handleEmailChange}
                            />
                        </label>
                        <Space />
                        <label>Senha:
                        <Input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Digite sua senha"
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
                        <div>
                    <a href="/recuperarsenha">Esqueci minha senha</a>

                        </div>
                    </form>
                </main>
                <Footer orange />
            </>
        )
    }
}

export default Login
