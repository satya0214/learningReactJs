import logo from './logo.svg';
import './App.css';
import Login from './components/Login';


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

var userIsRegistered = false;


function App() {
  return (
    <div>
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
      <Login isRegistered={userIsRegistered}/>
      
       </div>
  );
}

export default App;
