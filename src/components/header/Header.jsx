import "./header.css"

function Header() {
  const handleName = () =>{
    const names = ["Nuru", "Moha", "Din"];
    const int = Math.floor(Math.random() *3);
    return names[int];
  }

  const handleDate = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'short' });
    const year = date.getFullYear();
    return `${day} ${month}, ${year}`;
  };
  
  const handleTime = () => {
    const time = new Date();
    const hour = time.getHours().toString().padStart(2, '0');
    const minute = time.getMinutes().toString().padStart(2, '0');
    return `${hour}:${minute}`;
  }
  
   
  return (
    <header>
      <h3 className="date">{handleDate()}</h3>
      <h4 className="time">{handleTime()}</h4>
     <h1>Hello {handleName()}!</h1>
    </header>
  )
}

export default Header