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
  const [fullName , setfullName] = useState({
    fName : "",
    lName : "",
    email : ""
  });
  //For understanding of ES6 Spread operator ..
// const fruit = ['apple','orange','mango'];
// const vegitable = ['potato' , 'tomato','ladyFinger',...fruit];
// console.log(vegitable)
  function Handlechange(event){
    const newValue = event.target.value;
    const inputName = event.target.name;
    setfullName(prevValue =>{
      return{
        ...prevValue,
        [inputName]:newValue
      }
    })
  }


  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <p>{fullName.email}</p>
      <input 
      onChange={Handlechange}
      name='fName'
      type="text" 
      placeholder="Enter your Firstname?" 
      value={fullName.fName} 
      />
      <input 
      name='lName'
      onChange={Handlechange}
      type="text"
       placeholder="Enter your Lastname?" 
       value={fullName.lName}
       />
       <input 
      name='email'
      onChange={Handlechange}
      type="text"
       placeholder="Enter your EmailId?" 
       value={fullName.email}
       />
      <button>Submit</button>
    



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
