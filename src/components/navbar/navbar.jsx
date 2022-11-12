const NavBar = () => {
  return (
    <div className="flex justify-around items-center bg-blue-300 h-11 mx-auto ">
      <p className="heading font-[600] text-2xl font-['Roboto'] uppercase ">
        TODO LIST
      </p>
      <button
        id="menu-btn"
        className="hamburger focus:outline-none menu"
        onClick={() => {
          const btn = document.getElementById("menu-btn");
          btn.classList.toggle("open");
        }}
      >
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>
    </div>
  );
};

export default NavBar;
