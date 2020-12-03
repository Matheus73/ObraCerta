import React from 'react';
import Dropzone from 'react-dropzone';
import Box from './styles';

function InputDropFile(props) {

    function renderDragMenssage(isDragActive, isDragReject) {
        if(!isDragActive) {
            return <>Arraste as imagens de seus trabalhos aqui ou clique para selecionar</>
        }
        if(isDragReject) {
            return <>Há arquivos não suportado</>
        }
        return <>Jogue os arquivos aqui</>
    }

    return (
        <Dropzone accept="image/jpeg,jpg" onDropAccepted={files => props.handleNovaPublicacao(files)}>
            {({ getRootProps, getInputProps, isDragAccept, isDragReject, isDragActive }) => (
                <Box accept="image/jpeg,jpg"
                    {...getRootProps()}
                    isDragAccept={isDragAccept}
                    isDragReject={isDragReject}
                >
                    <input {...getInputProps()} />
                    {renderDragMenssage(isDragActive, isDragReject)}
                </Box>
            )}
        </Dropzone>
    );
}

export default InputDropFile;
