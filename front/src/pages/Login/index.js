import React,{Component} from 'react';
import Button from '../../components/Button';
import Input from '../../components/Input';
import axios from 'axios';
import Footer from '../../components/Footer';
import GlobalStyle from './styles';
import Space from '../../components/Space';

class Login extends Component {
    constructor(props){
        super(props)

        this.state = {
            email:'',
            password:'',
            err:''
        }
        
        this.url = 'http://localhost:3001/login'

        this.userData = {
            senha:'',
            email:''
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

        console.log(this.userData)

        axios.post(this.url,this.userData)
            .then( response => {
                console.log("Voce logou")
                console.log(response)
                this.props.history.push('/');
            } )
            .catch( error => {
                console.log(error)
                this.setState({
                    err: "O usuário não existe ou a senha está incorreta"
                })
            } )
	}

	render() {
        const {email,password,err} = this.state
		return (
            <>
            <GlobalStyle/>
            <div id="content">
            <h1>Login</h1>
            <p>Entre para encontrar os melhores profissionais para sua obra ou para divulgar o seu trabalho!</p>
			<form onSubmit={this.handleSubmit}>
                <div id="warning">
                    <p>{err}</p>
                </div>
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

export default Login
