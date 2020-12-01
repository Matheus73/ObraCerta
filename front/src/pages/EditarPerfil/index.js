import React, { Component } from 'react';
import imgProfileDefault from '../../assets/profileDefault.jpg';
import ProfileAvatarEditor from '../../components/ProfileAvatarEditor';
import Button from '../../components/Button';
import GlobalStyle from './styles';
import Space from '../../components/Space';
import InputTextArea from '../../components/InputTextArea';
import Footer from '../../components/Footer';
import InputDropFile from '../../components/InputDropFile';
import { uniqueId} from 'loadsh';
import filesize from 'filesize';
import api from '../../services/api';

class EditarPerfil extends Component {
    constructor(props) {
        super(props);

        this.state = {
            idUsuario: '',
            novaImagem: '',
            novoNomeCompleto: '',
            novoEmail: '',
            novoTelefone: '',
            novaDescricao: '',
            novaCategoria: '',
            novaLocalidade: '',
            uploadedPublicacoes: []
        };

        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.handleNovaDescricao = this.handleNovaDescricao.bind(this);
        this.handleNovaImagem = this.handleNovaImagem.bind(this);
        this.handleNovaPublicacao = this.handleNovaPublicacao.bind(this);
    }

    onFormSubmit(event) {
        event.preventDefault();
        const url = "/usuario/"+localStorage.getItem('idUsuario');

        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
        };

        const userData = new FormData();
        userData.append('nomeCompleto', '');
        userData.append('email', '');
        userData.append('telefone', '');
        userData.append('descricao', '');
        userData.append('categoria', '');
        userData.append('localidade', '');
        userData.append('imagemPerfil', this.state.novaImagem, ".jpeg");

        api
            .put(url, userData, config)
            .then((response) => {
                if(this.state.novoNomeCompleto !== '')
                localStorage.setItem('name', this.state.novoNomeCompleto);
                if(this.state.novoTelefone !== '')
                localStorage.setItem('telefone', this.state.novoTelefone);
                if(this.state.novaCategoria !== '')
                localStorage.setItem('categoria', this.state.novaCategoria);
                if(this.state.novaDescricao !== '')
                localStorage.setItem('descricao', this.state.novaDescricao);
                if(this.state.novaLocalidade !== '')
                localStorage.setItem('localidade', this.state.novaLocalidade);
                if(this.state.novaImagem !== '')
                localStorage.setItem('imagemPerfil', URL.createObjectURL(this.state.novaImagem));
                //TODO pegar link da nova imagem
            })
            .catch((error) => {
                console.log(error);
            });
    }

    handleNovaDescricao(text) {
        this.setState({
            novaDescricao: text,
        });
    }

    handleNovaImagem(canvas) {
        if (canvas === '') {
            this.setState({
                novaImagem: '',
            });
        } else {
            canvas.toBlob((blob) =>
                this.setState({
                    novaImagem: blob,
                }),
            );
        }
    }

    handleNovaPublicacao(images) {
        const uploadedImages = images.map( file => ({
            file,
            id: uniqueId(),
            name: file.name,
            readbleSize: filesize(file.size),
            // preview: URL.createObjectURL(file),
            // progress: '0',
            // uploaded: false,
            // error: false,
            // url: null,
        }));

        this.setState({
            uploadedPublicacoes: this.state.uploadedPublicacoes.concat(uploadedImages),
        });
        
    }

    uploadProcess(files, config) {
        
        const url = "";
        const data = new FormData();
        files.map( file => ({
            // data.append('file', file.file)
            // data.
        }));

        api
            .put(url, data, config)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <>
                <main>
                    <GlobalStyle />
                    <form onSubmit={this.onFormSubmit}>
                        <h1>Alterar perfil</h1>
                        <Button type="submit">Salvar</Button>
                        <Space />
                        <ProfileAvatarEditor
                            handleNovaImagem={this.handleNovaImagem}
                            src={imgProfileDefault}
                        />
                        <Space />
                        <InputTextArea
                            defaultValue={
                                localStorage.getItem('descricao') === 'null' &&
                                ''
                            }
                            placeholder="Descreva você e seu trabalho aqui"
                            onChange={(text) => this.handleNovaDescricao(text)}
                        />
                        <Space/>
                        <InputDropFile handleNovaPublicacao={this.handleNovaPublicacao}/>
                    </form>
                </main>
                <Footer />
            </>
        );
    }
}

export default EditarPerfil;
