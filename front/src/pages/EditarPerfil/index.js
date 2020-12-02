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
import Input2Mask from '../../components/InputMask';
import FileList from '../../components/FileList';

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
            uploadedFiles: [],
            uploadedNovaImagem: '',
        };

        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.handleNovaDescricao = this.handleNovaDescricao.bind(this);
        this.handleNovaImagem = this.handleNovaImagem.bind(this);
        this.handleNovaDescricao = this.handleNovaDescricao.bind(this);
        this.handleNovaCategoria = this.handleNovaCategoria.bind(this);
        this.handleNovaLocalidade = this.handleNovaLocalidade.bind(this);
        this.handleNovoTelefone = this.handleNovoTelefone.bind(this);
        this.handleUpload = this.handleUpload.bind(this);
    }

    async componentDidMount() {
        const response = await api.get(
            '/' + localStorage.getItem('idUsuario') + '/publicacoes',
            );
            //TODO remover console.log's
            console.log('%cMyProject%cline:44%cresponse', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(131, 175, 155);padding:3px;border-radius:2px', response)
            console.log('%cMyProject%cline:44%cresponsedata', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(131, 175, 155);padding:3px;border-radius:2px', response.data)

        this.setState({
            uploadedFiles: response.data.map((file) => ({
                id: file.idPublicacao,
                name: file.name,
                // readableSize: filesize(file.size),
                preview: file.url,
                uploaded: true,
                url: file.url,
            })),
        });
        //TODO remover console.log's
        console.log('%cMyProject%cline:57%cthis.state.uploadedFiles', 'color:#fff;background:#ee6f57;padding:3px;border-radius:2px', 'color:#fff;background:#1f3c88;padding:3px;border-radius:2px', 'color:#fff;background:rgb(95, 92, 51);padding:3px;border-radius:2px', this.state.uploadedFiles)
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
        userData.append('nomeCompleto', this.state.novoNomeCompleto);
        userData.append('email', this.state.novoEmail);
        userData.append('telefone', this.state.novoTelefone);
        userData.append('descricao', this.state.novaDescricao);
        userData.append('categoria', this.state.novaCategoria);
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

    handleNovoTelefone(telefone) {
        this.setState({
            novoTelefone: telefone,
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

    handleUpload = (files) => {
        const uploadedFiles = files.map((file) => ({
            file,
            id: uniqueId(),
            name: file.name,
            readableSize: filesize(file.size),
            preview: URL.createObjectURL(file),
            progress: 0,
            uploaded: false,
            error: false,
            url: null,
        }));

        this.setState({
            uploadedFiles: this.state.uploadedFiles.concat(uploadedFiles),
        });

        uploadedFiles.forEach(this.processUpload);
    };

    updateFile = (id, data) => {
        this.setState({
            uploadedFiles: this.state.uploadedFiles.map((uploadedFile) => {
                return id === uploadedFile.id
                    ? { ...uploadedFile, ...data }
                    : uploadedFile;
            }),
        });
    };

    processUpload = (uploadedFile) => {
        const data = new FormData();
        data.append('publicacao', uploadedFile.file, uploadedFile.name);

        api.post('/nova_publicacao', data, {
            headers: {
                'content-type': 'multipart/form-data',
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
            onUploadProgress: (e) => {
                const progress = parseInt(
                    Math.round((e.loaded * 100) / e.total),
                );

                this.updateFile(uploadedFile.id, {
                    progress,
                });
            },
        })
            .then((response) => {
                this.updateFile(uploadedFile.id, {
                    uploaded: true,
                    id: response.data._id,
                    url: response.data.url,
                });
            })
            .catch(() => {
                this.updateFile(uploadedFile.id, {
                    error: true,
                });
            });
    };

    handleDelete = async (id) => {
        const url = `/usuario/${localStorage.getItem(
            'idUsuario',
        )}/publicacao/${id}`;

        const config = {
            headers: {
                // 'content-type': 'multipart/form-data',
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
        };
        //TODO remover console.log's
        await api
            .delete(url, config)
            .then((response) => console.log(response))
            .catch(error => console.log(error));
        this.setState({
            uploadedFiles: this.state.uploadedFiles.filter(
                (file) => file.id !== id,
            ),
        });
    };

    render() {
        return (
            <>
                <main>
                    <GlobalStyle />
                    <form onSubmit={this.onFormSubmit}>
                        <h1>Alterar perfil</h1>
                        <Button type="submit">Salvar perfil</Button>
                        <Space />
                        <ProfileAvatarEditor
                            handleNovaImagem={this.handleNovaImagem}
                            src={localStorage.getItem('imagemPerfil')}
                        />
                        <Space />
                        <InputTextArea
                            maxLength="300"
                            defaultValue={localStorage.getItem('descricao')}
                            placeholder="Descreva você e seu trabalho aqui"
                            onChange={(e) =>
                                this.handleNovaDescricao(e.target.value)
                            }
                        />
                        <Space />
                        <label>
                            Telefone:
                            <Input2Mask
                                type="text"
                                id="telefone"
                                name="telefone"
                                alwaysShowMask="true"
                                mask="(99) 99999-9999"
                                defaultValue={localStorage.getItem('telefone')}
                                onChange={(e) =>
                                    this.handleNovoTelefone(e.target.value)
                                }
                            />
                        </label>
                        <Space />
                        <InputSelect
                            label={'Região: '}
                            onChange={(e) =>
                                this.handleNovaLocalidade(e.target.value)
                            }
                        >
                            {this.state.novaLocalidade === '' && (
                                <option value="">
                                    {localStorage.getItem('localidade')}
                                </option>
                            )}
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
                        <InputSelect
                            label={'Profissão:'}
                            onChange={(e) =>
                                this.handleNovaCategoria(e.target.value)
                            }
                        >
                            {this.state.novaCategoria === '' && (
                                <option value="">
                                    {localStorage.getItem('categoria')}
                                </option>
                            )}
                            <option value="Pedreiro">Pedreiro</option>
                            <option value="Marceneiro">Marceneiro</option>
                            <option value="Encanador">Encanador</option>
                            <option value="Pintor">Pintor</option>
                            <option value="Serralheiro">Serralheiro</option>
                            <option value="Eletricista">Eletricista</option>
                        </InputSelect>
                        <Space />
                    </form>
                    <form>
                        <InputDropFile
                            handleNovaPublicacao={this.handleUpload}
                        />
                        <Space />
                        <FileList
                            files={this.state.uploadedFiles}
                            onDelete={this.handleDelete}
                        />
                    </form>
                </main>
                <Footer orange />
            </>
        );
    }
}

export default EditarPerfil;
