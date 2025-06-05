import { createChat, getChats } from "../../chatApi";
import css from "./ModalNew.module.css";
export const ModalNew = ({ setNewChat, setChats }) => {
  async function handleClick() {
    setNewChat(false);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    await createChat({
      firstName: e.target[0].value,
      lastName: e.target[1].value,
    });
    const data = await getChats();
    setChats(data.data.data);
    setNewChat(false);
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
          <label className={css.label}>First name</label>
          <input
            className={css.input}
            name="FirstName"
            type="text"
            required
          ></input>
          <label className={css.label}>Last name</label>
          <input className={css.input} name="lastName" required></input>
          <button type="submit" className={css.button}>
            Create new chat
          </button>
        </form>
      </div>
    </div>
  );
};
