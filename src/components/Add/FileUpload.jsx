import { useState } from 'react';

const FileUpload = () => {
    const [file, setFile] = useState(null);
    const handleFileChange = (e) => {
        const localFile = e.target.files[0];
        setFile(localFile);
    }

    return (
        <div>
            <input type="file" onChange={handleFileChange} />
            {
                file && (
                    <div>
                        <p>Selected file: {file.name}</p>
                        <img src={URL.createObjectURL(file)} alt="Preview" />
                    </div>
                )
            }
        </div>
    )
}

export default FileUpload;