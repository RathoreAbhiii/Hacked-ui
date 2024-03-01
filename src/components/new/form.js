// import React from 'react';

// class Main extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             imageURL: '',
//         };

//         this.handleUploadImage = this.handleUploadImage.bind(this);
//     }

//     handleUploadImage(ev) {
//         ev.preventDefault();

//         const data = new FormData();
//         data.append('file', this.uploadInput.files[0]);
//         data.append('filename', this.fileName.value);

//         fetch('http://localhost:5000/upload', {
//             method: 'POST',
//             body: data,
//         }).then((response) => {
//             response.json().then((body) => {
//                 this.setState({ imageURL: `http://localhost:5000/${body.file}` });
//             });
//         });
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleUploadImage}>
//                 <div>
//                     <input ref={(ref) => { this.uploadInput = ref; }} type="file" />
//                 </div>

//                 <br />
//                 <div>
//                     <button>Upload</button>
//                 </div>

//             </form>
//         );
//     }
// }

// export default Main;