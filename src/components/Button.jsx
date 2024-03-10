function Button({name,handleClick}) {
    function handleClick(name) {
        this.props.handleClick(name)
    }
     return (
        <button onClick={handleClick(name)}>{name}</button>
     )
}

export default Button;