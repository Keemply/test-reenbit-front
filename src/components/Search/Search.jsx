import css from "./Search.module.css";
export const Search = ({ setRegister, setLogin, loggedIn, setFilter }) => {
  function handleClick(e) {
    switch (e.target.name) {
      case "login":
        setLogin(true);
        break;
      case "register":
        setRegister(true);
        break;
      default:
        break;
    }
  }
  async function handleChange(e) {
    setFilter(e.target.value);
  }
  return (
    <div className={css.wholeCont}>
      <div className={css.exeptInpCont}>
        <div className={css.imageCont}>
          <img alt="photo" className={css.img}></img>
        </div>
        <div>
          {!loggedIn && (
            <div className={css.buttonCont}>
              <button className={css.button} onClick={handleClick} name="login">
                Log in
              </button>
              <button
                className={css.button}
                onClick={handleClick}
                name="register"
              >
                Register
              </button>
            </div>
          )}
        </div>
      </div>
      <input
        type="text"
        placeholder="Search or start new chat"
        className={css.input}
        onChange={handleChange}
      />
    </div>
  );
};
