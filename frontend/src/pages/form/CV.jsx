import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppStateContext } from './Reducers/AppStateContext';
import axios from 'axios';

const CV = () => {
    const { selectedFile, setFile } = useAppStateContext();

    const fileInputRef = useRef(null);

    const [status, setStatus] = useState(false);

    const chooseFile = () => {
        fileInputRef.current.click();
        console.log(status);
    };

    const [dragging, setDragging] = useState(false);

    const handleDragEnter = (e) => {
        e.preventDefault();
        setDragging(true);
    };

    const handleDragLeave = (e) => {
        e.preventDefault();
        setDragging(false);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
        setDragging(true);
    };

    const handleDrop = (e) => {
        e.preventDefault();
        setDragging(false);

        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile) {
            setFile(droppedFile);
        }
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setFile(selectedFile);
        }
    };

    const handleFileRemove = () => {
        setFile(null);
        console.log(status);
    };

    const handleFileUpload = async () => {
        if (selectedFile) {
            const formData = new FormData();
            formData.append('file', selectedFile);

            try {
                await axios.post('http://localhost:5050/api/upload', formData);
                console.log('File uploaded successfully!');
                setStatus(true);
            } catch (error) {
                console.error('Error uploading file:', error);
            }
        }
    };

    const nextPageClicked = () => {
        navigate('/review');
    }

    const navigate = useNavigate();

    return (
        <div className="main-div">
            <div className='sec active' style={{ fontWeight: '600' }}>
                Please upload your CV or Resume here:
            </div>
            <div
                className='dragBox'
                style={{
                    width: '100%',
                    height: '25rem',
                    border: '2px dashed #cccccc',
                    borderRadius: '8px',
                    textAlign: 'center',
                    transition: 'background 0.3s',
                    background: dragging ? '#f2f2f2' : '#F0FFFF',
                }}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
            >
                <div style={{ marginBottom: '16px' }} className='drag'>
                    <p style={{ margin: '0', fontSize: '16px' }}>Drag and drop a file here or click to select a file</p>
                    {
                        selectedFile
                            ?
                            <label htmlFor="fileInput" className="custom-file-input-label">
                                {selectedFile.name}
                            </label>
                            :
                            <label htmlFor="fileInput" className="custom-file-input-label" style={{ background: '#631C56' }}>
                                Click here
                            </label>
                    }

                    <input
                        type="file"
                        id="fileInput"
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                        ref={fileInputRef} accept='.pdf' />
                    {selectedFile && (
                        <div>
                            {console.log(status)}
                            <button
                                type="button"
                                onClick={handleFileRemove}
                                style={{
                                    cursor: 'pointer',
                                    border: 'none',
                                    padding: '8px 16px',
                                    background: '#dc3545',
                                    color: '#ffffff',
                                    borderRadius: '4px',
                                    fontSize: '14px',
                                    marginRight: '8px',
                                }}
                            >
                                Remove
                            </button>
                            <button
                                type="button"
                                onClick={nextPageClicked}
                                style={{
                                    cursor: 'pointer',
                                    border: 'none',
                                    padding: '8px 16px',
                                    background: '#28a745',
                                    color: '#ffffff',
                                    borderRadius: '4px',
                                    fontSize: '14px',
                                }}
                            >
                                Go to Next
                            </button>
                        </div>
                    )}
                </div>

            </div>
        </div>

    );
};

export default CV;
