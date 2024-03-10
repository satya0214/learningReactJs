import Avatar from './Avatar';
function Card(props){
      
    const { img ,name , phone ,email} = props
    return (
       <div className="card">
        <div className="top">
            <h1 className="name">{name}</h1>
            <Avatar img={img}/>
        </div>
        <div className="bottom">
            <p className="info">{phone+'dfgdgdg'}</p>
            <p className="info">{email}</p>
        </div>
       </div>
        
    )
}

export default Card;

