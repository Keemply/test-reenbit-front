import css from "./Search.module.css";
export const Search = ({ setRegister, setLogin }) => {
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
    console.log(e);
  }
  return (
    <div className={css.wholeCont}>
      <div className={css.exeptInpCont}>
        <div className={css.imageCont}>
          <img alt="photo" className={css.img}></img>
        </div>
        <div>
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
        </div>
      </div>
      <input
        type="text"
        placeholder="Search or start new chat"
        className={css.input}
      />
    </div>
  );
};
