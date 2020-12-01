import React, { useRef, useState } from 'react';
import AvatarEditor from 'react-avatar-editor';
import { FaSearchMinus, FaSearchPlus } from 'react-icons/fa';
import Button from '../Button';
import Space from '../Space';
import Box, { Background, Info } from './styles';

/**
 * Representa um componente para troca de imagem de perfil de usuário
 * @param {object} props
 * @param {string} props.src - Caminho da imagem atual de perfil
 */
function ProfileAvatarEditor(props) {
    const [Img, setImg] = useState(props.src); //Usada para comparação de mudança
    const [imgFile, setImgFile] = useState(Img); //Armazena um novo upload de imagem
    const [scale, setScale] = useState(1); //Defini o zoom do corte da imagem
    const imgRef = useRef(null); //Referência a imagem editada de dentro do componente AvatarEditor
    const [resettable, setResettable] = useState(false);

    function onClickSave() {
        if (imgRef) {
            setImgFile(imgRef.current.getImageScaledToCanvas().toDataURL());
            setImg(imgRef.current.getImageScaledToCanvas().toDataURL());
            props.handleNovaImagem(imgRef.current.getImageScaledToCanvas());
            setResettable(true);
            setScale(1);
        }
    }

    function onClickReset() {
        setResettable(false);
        setImgFile(props.src);
        setImg(props.src);
        props.handleNovaImagem('');
        setScale(1);
    }

    return (
        <Box>
            <div>
                <Background>
                    <AvatarEditor
                        ref={imgRef}
                        image={imgFile}
                        width={280}
                        height={210}
                        border={0}
                        color={[20, 208, 174, 1.0]} // RGBA
                        scale={scale}
                        borderRadius={25}
                    />
                </Background>
                {imgFile !== Img && (
                    <Info>Arraste a imagem para posicionar</Info>
                )}
            </div>
            <div>
                {imgFile !== Img ? (
                    <>
                        <span>
                            <FaSearchMinus />
                            <input
                                type="range"
                                step="0.1"
                                value={scale}
                                onChange={(event) =>
                                    setScale(parseFloat(event.target.value))
                                }
                                min="0.5"
                                max="10"
                            />
                            <FaSearchPlus />
                        </span>
                        <Space />
                        <span>
                            <Button onClick={() => onClickReset()}>
                                Cancelar
                            </Button>
                            <Button onClick={() => onClickSave()}>
                                Confirmar
                            </Button>
                        </span>
                    </>
                ) : (
                    <span>
                        {resettable ? (
                            <Button second onClick={() => onClickReset()}>
                                Desfazer alteração
                            </Button>
                        ) : (
                            <Button second>
                                <label>
                                    Alterar foto do perfil
                                    <input
                                        type="file"
                                        accept="image/jpeg"
                                        onChange={(event) =>
                                            setImgFile(event.target.files[0])
                                        }
                                    />
                                </label>
                            </Button>
                        )}
                    </span>
                )}
            </div>
        </Box>
    );
}

export default ProfileAvatarEditor;
