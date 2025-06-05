import { login } from "../../chatApi";
import css from "./ModalLog.module.css";

export const ModalLog = ({ setLogin, setLoggedIn }) => {
  function handleClick() {
    setLogin(false);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await login({
        email: e.target[0].value,
        password: e.target[1].value,
      });
      setLogin(false);
      setLoggedIn(true);
    } catch (e) {
      console.log(e.message);
    }
  }
  return (
    <div className={css.cont}>
      <div className={css.window}>
        <button type="button" className={css.closeBut} onClick={handleClick}>
          <svg className={css.svg}>
            <use className={css.svg} href="/svg/close.svg#close"></use>
          </svg>
        </button>
        <form className={css.form} onSubmit={handleSubmit}>
          <label className={css.label}>Email</label>
          <input
            className={css.input}
            name="Email"
            type="email"
            required
          ></input>
          <label className={css.label}>Password</label>
          <input className={css.input} name="Password" required></input>
          <button type="submit" className={css.button}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
