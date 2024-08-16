import './Hamburger.css';
export default function HamburgerMenu({handleSidebar, openSidebar}) {

  function handleNavOpen() {
    handleSidebar()
  }

  
  return (
    <div>
      <button
        className={
          openSidebar
          ? "hamburger hamburger--3dx is-active" 
            : "hamburger hamburger--3dx"
        }
        type="button"
        onClick={handleNavOpen}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>
    </div>
  );
}
