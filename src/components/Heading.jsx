
function Heading(){
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const date = new Date();
      const currYear = date.getFullYear();
      let currDate = date.getDate();
      currDate = currDate<10 ? `0${currDate}` : currDate;
      let currMonth = date.getMonth()+1;
      currMonth = currMonth<10 ? `0${currMonth}` : currMonth;
      const currTime = date.getHours();
      const currDay = date.getDay();
  
      const newData = date.getDate() + '-' + date.getMonth() + '-' +currYear
      const newData1 = `${currDate}-${currMonth}-${currYear}`
  
  
      console.log(days[currDay],newData, newData1,currTime);
    
    return(
        <>
         <h1>Good Morning!</h1>
         <h1>Day :-{days[currDay] }</h1>
         <h1> Today's Date :-{newData1}</h1>
       
        </>
    );
}

export default Heading;