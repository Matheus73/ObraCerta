import React, { Component } from 'react';
import ProfileAvatarEditor from '../../components/ProfileAvatarEditor';
import Button from '../../components/Button';
import GlobalStyle from './styles';
import Space from '../../components/Space';
import InputTextArea from '../../components/InputTextArea';
import Footer from '../../components/Footer';
import InputDropFile from '../../components/InputDropFile';
import { uniqueId } from 'loadsh';
import filesize from 'filesize';
import api from '../../services/api';
import InputSelect from '../../components/InputSelect';

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
            uploadedPublicacoes: [],
            uploadedNovaImagem: '',
        };

        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.handleNovaDescricao = this.handleNovaDescricao.bind(this);
        this.handleNovaImagem = this.handleNovaImagem.bind(this);
        this.handleNovaDescricao = this.handleNovaDescricao.bind(this);
        this.handleNovaPublicacao = this.handleNovaPublicacao.bind(this);
        this.handleNovaCategoria = this.handleNovaCategoria.bind(this);
        this.handleNovaLocalidade = this.handleNovaLocalidade.bind(this);
    }

    onFormSubmit(event) {
        event.preventDefault();
        const url = '/usuario/' + localStorage.getItem('idUsuario');

        const config = {
            headers: {
                'content-type': 'multipart/form-data',
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
        };

        const userData = new FormData();
        if (this.state.novaImagem !== '')
            userData.append('nomeCompleto', this.state.novoNomeCompleto);
        if (this.state.novaImagem !== '')
            userData.append('email', this.state.novoEmail);
        if (this.state.novaImagem !== '')
            userData.append('telefone', this.state.novoTelefone);
        if (this.state.novaImagem !== '')
            userData.append('descricao', this.state.novaDescricao);
        if (this.state.novaImagem !== '')
            userData.append('categoria', this.state.novaCategoria);
        if (this.state.novaImagem !== '')
            userData.append('localidade', this.state.novaLocalidade);
        if (this.state.novaImagem !== '')
            userData.append('imagemPerfil', this.state.novaImagem, '.jpeg');

        api.put(url, userData, config)
            .then((response) => {
                if (this.state.novoNomeCompleto !== '')
                    localStorage.setItem('name', this.state.novoNomeCompleto);
                if (this.state.novoTelefone !== '')
                    localStorage.setItem('telefone', this.state.novoTelefone);
                if (this.state.novaCategoria !== '')
                    localStorage.setItem('categoria', this.state.novaCategoria);
                if (this.state.novaDescricao !== '')
                    localStorage.setItem('descricao', this.state.novaDescricao);
                if (this.state.novaLocalidade !== '')
                    localStorage.setItem(
                        'localidade',
                        this.state.novaLocalidade,
                    );
                if (this.state.novaImagem !== '')
                    localStorage.setItem(
                        'imagemPerfil',
                        this.state.uploadedNovaImagem,
                    );
                this.props.history.push('/');
            })
            .catch((error) => {
                console.log(error);
            });
    }

    handleNovaLocalidade(localidade) {
        this.setState({
            novaLocalidade: localidade,
        });
    }

    handleNovaCategoria(categoria) {
        this.setState({
            novaCategoria: categoria,
        });
    }

    handleNovaDescricao(descricao) {
        this.setState({
            novaDescricao: descricao,
        });
    }

    handleNovaImagem(canvas) {
        if (canvas === '') {
            this.setState({
                novaImagem: '',
                uploadedNovaImagem: '',
            });
        } else {
            canvas.toBlob((blob) =>
                this.setState({
                    novaImagem: blob,
                }),
            );
            this.setState({
                uploadedNovaImagem: canvas.toDataURL(),
            });
        }
    }

    handleNovaPublicacao(images) {
        const uploadedImages = images.map((file) => ({
            file,
            id: uniqueId(),
            name: file.name,
            readbleSize: filesize(file.size),
            preview: URL.createObjectURL(file),
            progress: '0',
            uploaded: false,
            error: false,
            url: null,
        }));

        this.setState({
            uploadedPublicacoes: this.state.uploadedPublicacoes.concat(
                uploadedImages,
            ),
        });
    }

    uploadProcess(files, config) {
        const url = '';
        const data = new FormData();
        // files.map( file => ({
        //     data.append('file', file.file)
        // }));

        api.put(url, data, config)
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
                            src={localStorage.getItem('imagemPerfil')}
                        />
                        <Space />
                        <InputTextArea
                            defaultValue={localStorage.getItem('descricao')}
                            placeholder="Descreva você e seu trabalho aqui"
                            onChange={(e) =>
                                this.handleNovaDescricao(e.target.value)
                            }
                        />
                        <Space />
                        <InputSelect label="Profissão:" onChange={e => this.handleNovaCategoria(e.target.value)}>
                            <option value="Não definido"></option>
                            <option value="Pedreiro">Pedreiro</option>
                            <option value="Marceneiro">Marceneiro</option>
                            <option value="Encanador">Encanador</option>
                            <option value="Pintor">Pintor</option>
                            <option value="Serralheiro">Serralheiro</option>
                            <option value="Eletricista">Eletricista</option>
                        </InputSelect>
                        <InputSelect label="Localidade:" onChange={e => this.handleNovaLocalidade(e.target.value)}>
                            <option value="Não definido"></option>
                            <option value="AC">Acre</option>
                            <option value="AL">Alagoas</option>
                            <option value="AP">Amapá</option>
                            <option value="AM">Amazonas</option>
                            <option value="BA">Bahia</option>
                            <option value="CE">Ceará</option>
                            <option value="DF">Distrito Federal</option>
                            <option value="ES">Espírito Santo</option>
                            <option value="GO">Goiás</option>
                            <option value="MA">Maranhão</option>
                            <option value="MT">Mato Grosso</option>
                            <option value="MS">Mato Grosso do Sul</option>
                            <option value="MG">Minas Gerais</option>
                            <option value="PA">Pará</option>
                            <option value="PB">Paraíba</option>
                            <option value="PR">Paraná</option>
                            <option value="PE">Pernambuco</option>
                            <option value="PI">Piauí</option>
                            <option value="RJ">Rio de Janeiro</option>
                            <option value="RN">Rio Grande do Norte</option>
                            <option value="RS">Rio Grande do Sul</option>
                            <option value="RO">Rondônia</option>
                            <option value="RR">Roraima</option>
                            <option value="SC">Santa Catarina</option>
                            <option value="SP">São Paulo</option>
                            <option value="SE">Sergipe</option>
                            <option value="TO">Tocantins</option>
                        </InputSelect>
                        <Space />
                        <InputDropFile
                            handleNovaPublicacao={this.handleNovaPublicacao}
                        />
                    </form>
                </main>
                <Footer />
            </>
        );
    }
}

export default EditarPerfil;
