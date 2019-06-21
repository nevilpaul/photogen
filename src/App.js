import React from 'react';
import ml5 from "ml5"
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    // this.canvasCreatePreview = React.createRef();
    this.state = {
        imagefile:"",
        imageResult:""
    }
}
  handle_over = event => {
    event.preventDefault();
    event.stopPropagation();
  }
  handle_enter = event => {
      event.preventDefault();
      event.stopPropagation();
      // event.target.parentNode.children[1].style.display = "none";
      event.target.parentNode.children[1].children[0] !== undefined ? event.target.parentNode.children[1].children[0].style.display = "none":console.log('no child')
      
  }
  handle_drop = event => {
      event.preventDefault();
      event.stopPropagation();
      var dt = event.dataTransfer;
      var file = dt.files[0];
      this.setState({
          imagefile: file
      });
      var fileLength = dt.files.length;
 
      if (file.type.startsWith("image/") && fileLength === 1) {
          // var image = document.querySelector('.ReactCrop__image');
          var reader = new FileReader();
          reader.addEventListener('load', ()=> {
              this.setState({
                imageResult: reader.result
              });
          },false);
          reader.readAsDataURL(file);
      }
  }
  clicked_event = event =>{
    event.preventDefault();
    let clicker = document.getElementById('dragImage');
    var dt = event.target;
    console.log(dt)
    var file = dt.files[0];
    console.log(file)
    this.setState({
      imagefile: file
    });
    var fileLength = dt.files.length;
 
    if (file.type.startsWith("image/") && fileLength === 1) {
      // var image = document.querySelector('.ReactCrop__image');
      var reader = new FileReader();
      reader.addEventListener('load', ()=> {
        clicker.style.display ="none";
        this.setState({
          imageResult: reader.result
        });
      },false);
      reader.readAsDataURL(file);
    }

  }
  clickImageChanger =e=>{
    let clicked = document.getElementById('imageUpload');
    clicked.click();
  }
  classify_image = event =>{
    // Initialize the Image Classifier method with MobileNet
  const classifier = ml5.imageClassifier('MobileNet', modelLoaded);

  // When the model is loaded
  function modelLoaded() {
    console.log('Model Loaded!');
  }

  // Make a prediction with a selected image
  classifier.predict(document.getElementById('image'), function(err, results) {
    console.log(results);
  });
  }
  render(){
    const {imageResult} = this.state;
    return (
      <div className="App">
      <h2>Image Classifier | php_ml</h2>
        <div className="place" onDragOver={this.handle_over.bind(this)} onDragEnter={this.handle_enter.bind(this)} onDrop={this.handle_drop.bind(this)}>
          {
            imageResult === '' ?"":<img src = {imageResult} alt="" className="imageScaler" id="image"/>
          }
          <div className="dragImage" id="dragImage" onClick={this.clickImageChanger.bind(this)}>
              <p>Select Image to upload Or drag and drop video files</p>
          </div>
          <input className="file" type="file" name="imageUpload" id="imageUpload" onChange={this.clicked_event.bind(this)}/>
        </div>
        <button className="name" type="button" value="submition" onClick={this.classify_image.bind(this)}>Classify</button>
      </div>
    );
  }
  
}

export default App;
