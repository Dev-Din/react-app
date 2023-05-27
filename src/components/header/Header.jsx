import "./header.css"

function Header() {
  const handleName = () =>{
    const names = ["Nuru", "Moha", "Din"];
    const int = Math.floor(Math.random() *3);
    return names[int];
  }

  const handleDate = () =>{
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  const handleTime = () =>{
    const time = new Date();
    const hour = time.getHours();
    const minute = time.getMinutes();
    return `${hour}:${minute}`;
  }
  
  return (
    <header>
      <h1>{handleTime()} {handleDate()}</h1>
     <h1>Hello {handleName()}!</h1>
    </header>
  )
}

export default Header