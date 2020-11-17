import React,{Component} from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Footer from '../../components/Footer';
import GlobalStyle from './styles';
import Space from '../../components/Space';

class Cadastro extends Component {
    constructor(props){
        super(props)

        this.state = {
            name: '',
            email:'',
            password:'',
            confirm_password:''

        }
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

	handleConfirmPasswordChange = event => {
		this.setState({
			confirm_password: event.target.value
		})
	}

	handleSubmit = event => {
		event.preventDefault()
        console.log(this.state)
	}

	render() {
        const {name,email,password,confirm_password} = this.state
		return (
            <>
            <GlobalStyle/>
            <div id="content">
            <h1>CADASTRE-SE</h1>
            <p>Cadastre-se para ter acesso a melhor plataforma do mercado!</p>
			<form onSubmit={this.handleSubmit}>
                <Space/>
					<label>Nome:
                        <Input
                            type="text"
                            id="name"
                            name="name"
                            placeholder = "Digite seu nome" 
                            value={name}
                            onChange={this.handleNameChange}
                        />
                    </label>
                <Space/>
					<label>Email:
                        <Input
                            type="email"
                            id="email"
                            name="email"
                            placeholder = "Digite seu email" 
                            value={email}
                            onChange={this.handleEmailChange}
                        />
                    </label>
                <Space/>
					<label>Senha:
                        <Input
                            type="password"
                            id="password"
                            name="password"
                            placeholder = "Digite sua senha" 
                            value={password}
                            onChange={this.handlePasswordChange}
                        />
                    </label>
                <Space/>
					<label>Confirme sua senha:
                        <Input
                            type="password"
                            id="confirm_password"
                            name="confirm_password"
                            placeholder = "Confirme sua senha" 
                            value={confirm_password}
                            onChange={this.handleConfirmPasswordChange}
                        />
                    </label>

                <Space/>
                <label> 
                <input id = "user-terms" type = "checkbox" name = "terms"/>
                Li e aceito os <b>termos de uso</b></label>

                <div>
                <Space/>
                <Button>Enviar</Button>
                </div>
			</form>
            </div>
            <Footer orange />
            </>
		)
	}
}

export default Cadastro
