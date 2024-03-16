import logo from './logo.svg';
import './App.css';
import  {useState}  from 'react';
// import Login from './components/Login';


// import Heading from './Heading';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import Note from './components/Note';
// import Node from './constants/Constants';
//  import Card from './components/Card';
//  import Contact from './components/Contact';
// import Entry from './components/Entry';
// import emojiPedia from './components/emojiPedia';

 
// function createCard(Contact){
//   return(
//     <Card 
//     key ={Contact.id}
//     name = {Contact.name}
//     img ={Contact.imgURL}
//     phone ={Contact.phone}
//     email={Contact.email}
//     />
//   )
// }

// function createEmoji(emojiPedia){
//   return(
//     <Entry 
//     key={emojiPedia.id}
//     emoji = {emojiPedia.emoji}
//     name={emojiPedia.name}
//     meaning = {emojiPedia.meaning}
//     />
//   )
// }

// function Createnode(node){
//   return (
//     <Note 
//   key = {node.key}
//   title={node.title}
//   content = {node.content}
//   />
//   )
// }
 
// This is the Loginpage variavle
// var userIsRegistered = false;


function App() {
  const [fname , setfName] = useState();
  const [lname , setlName] = useState();
  function Handlechange(event) {
    console.log(event.target.value)
    setfName(event.target.value)
  }

  function Handlechange1(event) {
    console.log(event.target.value)
    setlName(event.target.value)
  }
  return (
    <div className="container">


      <h1>Hello {fname} {lname}</h1>
      <input 
      onChange={Handlechange}
      type="text" placeholder="Enter your Firstname?" />
      <input 
      onChange={Handlechange1}
      type="text" placeholder="Enter your Lastname?" />
      <button >Submit</button>
    



      {/* <Heading /> */}
      {/* <Header />
      {Node.map(Createnode)}
      <Footer /> */}


      {/* <Card /> */}
   
    {/* <h1 className="heading">My Contacts</h1>
    {Contact.map(createCard)} */}
    {/* <h1 className="heading">emojipedia</h1>
    {emojiPedia.map(createEmoji)} */}
      {/* <h1>
        <span className='heading'>emojiPedia</span>
      </h1>
      <dl className="meaning">{emojiPedia.map(createEmoji)}</dl> */}

      {/* <Login isRegistered={userIsRegistered}/> */}
      
     
      
       </div>
  );
}

export default App;
