import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CV = () => {
    const fileInputRef = useRef(null);

    const chooseFile = () => {
        fileInputRef.current.click();
    };

    const [dragging, setDragging] = useState(false);
    const [file, setFile] = useState(null);

    const [status, setStatus] = useState(false);

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
        window.location.reload(false);
    };

    const handleFileUpload = () => {
        if (file) {
            const formData = new FormData();
            formData.append('file', file);

            fetch('http://localhost:5050/api/uploadFile', {
                method: 'POST',
                body: formData,
            })
                .then(response => response.json())
                .then(data => {
                    console.log('File uploaded successfully:', data);
                    setStatus(status => !status);
                })
                .catch(error => {
                    console.error('Error uploading file:', error);
                });
        }
    };

    const navigate = useNavigate();

    const nextClicked = () => {
        navigate('/step-1');
    }

    return (
        <section>
            <div className="container" style={{ height: '100vh' }}>
                <div className="main">
                    <div className="main-div">
                        <div className='sec' style={{ fontWeight: '600' }}>
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
                                <input
                                    type="file"
                                    onChange={handleFileChange}
                                    style={{ display: 'none' }}
                                    ref={fileInputRef} />
                                <button onClick={chooseFile} className='uploadBut'>Choose File</button>
                                {file && (
                                    <div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                                            <h4 style={{ margin: '0', fontSize: '14px' }}>Selected File:</h4>
                                            <p style={{ margin: '8px 0', fontSize: '14px' }}>{file.name}</p>
                                        </div>
                                        {
                                            !status ?
                                                <div>
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
                                                        onClick={handleFileUpload}
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
                                                        Upload File
                                                    </button>
                                                </div>
                                                :
                                                <div className='successful'>
                                                    File uploaded successfully!!!
                                                </div>
                                        }

                                    </div>
                                )}
                            </div>

                        </div>

                    </div>
                    <div className={status ? "button but" : "button but hidden"}>
                        <button className='next' onClick={nextClicked}>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CV;
