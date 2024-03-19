import logo from './logo.svg';
import './App.css';
import  {useState}  from 'react';
import ToDoItems from './components/ToDoItems';
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
  const [inputText , setinputText] = useState("");
  // const [isDisable , setIsDisable] = useState(true);
  const [items , setItems] = useState([]);
  
   function Handelchange(event){
   
       const newValue = event.target.value;
       
       setinputText(newValue)
       
   }

   function addItems(){
    setItems(prevValue =>{
      return[ inputText,...prevValue,]
      
      })

     setinputText("")
   
   }

   function deleteItems(id){
    setItems(prevValue =>{
       return prevValue.filter((items , indexes) =>{
        return indexes !==id;
       })
    })
   }

   
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={Handelchange} type="text" value={inputText}/>
        <button
        //disabled={isDisable}
        onClick={addItems}>
          <span>Add</span>
        </button>
      </div>
      <div>
        
        <ul>
          {items.map((todoItem , indexes) =>
          <ToDoItems 
          text = {todoItem}
          onChecked = {deleteItems}
          key = {indexes}
          id = {indexes}
          />
          )}
          
        </ul>
      </div>
    



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
