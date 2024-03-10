import logo from './logo.svg';
import './App.css';
// import Heading from './Heading';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Note from './components/Note';
 import Card from './components/Card';
function App() {
  return (
    <div>
      {/* <Heading /> */}
      {/* <Header />
      <Note />
      <Footer />
      <Card /> */}
    {/* <Note /> */}
   
    <Card 
    //  name ="XYZ"
     img = "https://sample-videos.com/img/Sample-png-image-100kb.png" 
     alt='xyz'
     email ='abc123@gmail.com'
     phone ='+91098765432'


     />
        <Card 
    //  name ="ABCx"
     img = "https://www.fnordware.com/superpng/pnggrad16rgb.png" 
     alt='pnggrad16rgb'
     email ='abc123@gmail.com'
     phone ='+91098765432'
     />
    </div>
  );
}

export default App;
