import Input from "./Input";
function Login(props){
    return(
        <form>
            <input type="text" placeholder="Username"/>
            <input type="password" placeholder="Password"/>
            {props.isRegistered === false && (
            <input type="password" placeholder="Confirm Password"/>
            )}
            <button type="submit">
                {props.isRegistered ? "Login" : "Register"}
            </button>
        </form>
    );
}

export default Login;