
function Card(props){
      
    const {alt, name, img , phone ,email} = props
    return (
       <div className="card">
        <div className="top">
            <h1>{name+'dfgdgdgs'}</h1>
            {/* <img src={img} alt={alt}/> */}
        </div>
        <div className="bottom">
            <p>{phone+'dfgdgdg'}</p>
            <p>{email}</p>
        </div>
       </div>
        
    )
}

export default Card;


 // <>
        // <h1>{name}</h1>
        // <img src={img} alt={alt} />
        // </>