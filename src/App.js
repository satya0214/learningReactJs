import logo from './logo.svg';
import './App.css';
// import Heading from './Heading';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Note from './components/Note';
 import Card from './components/Card';
 import Contact from './components/Contact';

function createCard(Contact){
  return(
    <Card 
    key ={Contact.id}
    name = {Contact.name}
    img ={Contact.imgURL}
    phone ={Contact.phone}
    email={Contact.email}
    />
  )
}

function App() {
  return (
    <div>
      {/* <Heading /> */}
      {/* <Header />
      <Note />
      <Footer />
      <Card /> */}
    {/* <Note /> */}
   
    <h1 className="heading">My Contacts</h1>
    {Contact.map(createCard)}

    </div>
  );
}

export default App;
