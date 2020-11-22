import React, { Component } from 'react';
import axios from 'axios';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Footer from '../../components/Footer';
import GlobalStyle from './styles';
import Space from '../../components/Space';
import Input2Mask from '../../components/InputMask';
import Alert from '../../components/Alert';

/**
* Representauma  página de cadastro, possui 3 atributos state,url e UserData.
* state consiste no conjunto de estados da tela, desde os inputs do usuario até os erros possiveis
* url é a rota que será usada para requisições ao back
* UserData são os dados do novo usuário já validados, separados para o envio da requisição
*/
class Cadastro extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            password: '',
            phone: '',
            confirm_password: '',
            terms: false,
            errEmail: '',
            errPassword: '',
            errConfirmPassword: '',
            errTerms: '',
            errPhone: ''

        }

        this.url = 'http://localhost:3001/registrar'// Colocar a Url do back aqui

        this.userData = {
            nomeCompleto: '',
            email: '',
            senha: '',
            telefone: ''
        }
    }

    validate() {
        var isCorrect = true
        let initial = this.state.email.substring(0, this.state.email.indexOf("@"));
        let domain = this.state.email.substring(this.state.email.indexOf("@") + 1, this.state.email.length);
        if ((initial.length >= 1) &&
            (domain.length >= 3) &&
            (initial.search("@") === -1) &&
            (domain.search("@") === -1) &&
            (initial.search(" ") === -1) &&
            (domain.search(" ") === -1) &&
            (domain.search(".") !== -1) &&
            (domain.indexOf(".") >= 1) &&
            (domain.lastIndexOf(".") < domain.length - 1)) {
            // isCorrect = true;
            this.setState({
                errEmail: ''
            })

        }
        else {
            isCorrect = false;
            this.setState({
                errEmail: "Email inválido"
            })
        }
        if (this.state.phone.replace(/\D/gim, '').length < 10) {
            isCorrect = false
            this.setState({
                errPhone: "Telefone Inválido"
            })
        } else {
            this.setState({
                errPhone: ""
            })
        }
        if (this.state.password.length < 6) {
            isCorrect = false
            this.setState({
                errPassword: "Sua senha deve possuir no minimo 6 digitos!"
            })

        }
        if (this.state.password !== this.state.confirm_password) {
            isCorrect = false
            this.setState({
                errConfirmPassword: "As senhas não correspodem"
            })
        }
        if (!this.state.terms) {
            isCorrect = false
            this.setState({
                errTerms: "Você precisa concordar com os termos de uso!"
            })
        }
        if (isCorrect) {
            this.setState({
                errEmail: ''
            })
            this.setState({
                errConfirmPassword: ''
            })
            this.setState({
                errPassword: ''
            })
            this.userData.nomeCompleto = this.state.name;
            this.userData.email = this.state.email;
            this.userData.senha = this.state.password;
            this.userData.telefone = this.state.phone.replace(/\D/gim, '');

        }
        return isCorrect
    }

    handleTermsClicked = () => {
        this.setState({
            terms: !this.state.terms
        })
    }

    handleNameChange = event => {
        this.setState({
            name: event.target.value
        })
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

    handlePhoneChange = event => {
        this.setState({
            phone: event.target.value
        })
    }

    handleConfirmPasswordChange = event => {
        this.setState({
            confirm_password: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        var valid = this.validate()
        const headers = {
            'content-type': 'application/json',
        }
        if (valid) {
            axios.post(this.url, this.userData, headers)
                .then(response => {
                    this.props.handleLogin(response.data.dados);
                    this.props.history.push('/');
                })
                .catch(error => {
                    console.log(error)
                })

        }
        this.render()

    }

    render() {
        const { name, email, password, phone, confirm_password, terms, errEmail, errPassword, errConfirmPassword, errTerms, errPhone } = this.state
        return (
            <>
                <GlobalStyle />
                <main>
                    <h1>CADASTRE-SE</h1>
                    <form onSubmit={this.handleSubmit}>
                        <p>Cadastre-se para ter acesso a plataforma
                        e encontrar os melhores profissionais para sua obra
                        ou para divulgar o seu trabalho!</p>
                        <Space />
                        <label>Nome:
                        <Input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Digite seu nome"
                                value={name}
                                onChange={this.handleNameChange}
                            />
                        </label>
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
                            <Alert>{errEmail}</Alert>
                        </label>
                        <Space />
                        <label>Telefone:
                        <Input2Mask
                                type="text"
                                id="phone"
                                name="phone"
                                alwaysShowMask="true"
                                mask="(99) 99999-9999"

                                value={phone}
                                onChange={this.handlePhoneChange}
                            />
                            <Alert>{errPhone}</Alert>
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
                            <Alert>{errPassword}</Alert>
                        </label>
                        <Space />
                        <label>Confirme sua senha:
                        <Input
                                type="password"
                                id="confirm_password"
                                name="confirm_password"
                                placeholder="Confirme sua senha"
                                value={confirm_password}
                                onChange={this.handleConfirmPasswordChange}
                            />
                            <Alert>{errConfirmPassword}</Alert>
                        </label>

                        <Space />
                        <label>
                            <input id="user-terms" type="checkbox" name="terms" onClick={this.handleTermsClicked} value={terms} />
                            Li e aceito os <a href="/termosdeuso" target="_blank">termos de uso</a>
                            <Alert>{errTerms}</Alert>
                        </label>

                        <Space />
                        <Button>Enviar</Button>
                    </form>
                </main>
                <Footer orange />
            </>
        )
    }
}

export default Cadastro
