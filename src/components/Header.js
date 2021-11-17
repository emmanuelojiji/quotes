import './Header.scss'

const Header = () => {

  const newDate = new Date();

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  let day = days[newDate.getDay()];
  let time = newDate.getHours();

  const greeting = time < 12 ? 'Good Morning' : 'Good Evening'

  
  return (
    <header className="page-container">
      <span className="day">{day}</span>
      <h3 className="greeting">{greeting}</h3>
    </header>
  );
};

export default Header;
