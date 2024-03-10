


function Footer(){
    let msg = "Copyright";
    const date = new Date();
    const currYear = date.getFullYear(); 
    return(
        <>
       
        <footer>
        <p>{msg} {currYear}</p>
       
        </footer>
        </>
    );
}

export default Footer;