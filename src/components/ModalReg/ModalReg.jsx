import { register } from "../../chatApi";
import css from "./ModalReg.module.css";
export const ModalReg = ({ setRegister }) => {
  function handleClick() {
    setRegister(false);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const regist = await register({
        name: e.target[0].value,
        email: e.target[1].value,
        password: e.target[2].value,
      });
      setRegister(false);
    } catch (e) {
      console.log(e.message);
    }
  }
  return (
    <div className={css.cont}>
      <div className={css.window}>
        <button type="button" className={css.closeBut} onClick={handleClick}>
          <svg className={css.svg}>
            <use className={css.svg} href="/public/svg/close.svg#close"></use>
          </svg>
        </button>
        <form className={css.form} onSubmit={handleSubmit}>
          <label className={css.label}>Name</label>
          <input className={css.input} name="Name"></input>
          <label className={css.label}>Email</label>
          <input className={css.input} name="Email" type="email"></input>
          <label className={css.label}>Password</label>
          <input className={css.input} name="Password"></input>
          <button type="submit" className={css.button}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};
