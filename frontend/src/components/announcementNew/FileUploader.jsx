import React, { useState } from 'react';
import { storage } from "../../firebase";

//uploader to add all type of files.
function FileUploader({ setFileUrl }) {
    const [progress, setProgress] = useState(0);
    const [file, setFile] = useState(null);

  const handleChange = e => {
    if (e.target.files[0]) {
        setFile(e.target.files[0]);
    }
  };
  
  const handleUpload = () => {
    if(file===null){
      alert('Please select a file to upload');
    }else{
    const uploadTask = storage.ref(`files/${file.name}`).put(file);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        setProgress(progress);
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("files")
          .child(file.name)
          .getDownloadURL()
          .then(url => {
            setFileUrl(url);
          });
      }
    );
    }
  };

  console.log("file: ", file);
  return (

    <div>

        <br/>
          <input type="file" className="" style={{width:'60%', border:'none'}} id="exampleFormControlFile1" onChange={handleChange}/>
          <button className="btn-newPost-upload" 
          onClick={handleUpload}> Upload </button>
          <br/>
        <br/>
        <progress className="announcement-progress" value={progress} max="100" />
        
    </div>   

  );
}

export default FileUploader;
