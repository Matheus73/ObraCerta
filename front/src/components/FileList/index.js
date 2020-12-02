import React from "react";
import { MdCheckCircle, MdError, MdLink } from "react-icons/md";
import { Circle } from 'rc-progress';

import { Container, FileInfo, Preview } from "./styles";

const FileList = ({ files, onDelete }) => (
  <Container>
    {files.map(uploadedFile => (
      <li key={uploadedFile.id}>
        <FileInfo>
          <Preview src={uploadedFile.preview} />
          <div>
            <strong>{uploadedFile.name}</strong>
            <span>
              {uploadedFile.readableSize}{" "}
              {!!uploadedFile.url && (
                <a onClick={() => onDelete(uploadedFile.id)}>
                  Excluir
                </a>
              )}
            </span>
          </div>
        </FileInfo>

        <div>
          {!uploadedFile.uploaded &&
            !uploadedFile.error && (
              <Circle
                strokeWidth="4" strokeColor="#D3D3D3"
                percentage={uploadedFile.progress}
              />
            )}

          {uploadedFile.url && (
            <a
              href={uploadedFile.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdLink style={{ marginRight: 8 }} size={24} color="#222" />
            </a>
          )}

          {uploadedFile.uploaded && <MdCheckCircle size={24} color="green" />}
          {uploadedFile.error && <MdError size={24} color="#e57878" />}
        </div>
      </li>
    ))}
  </Container>
);

export default FileList;