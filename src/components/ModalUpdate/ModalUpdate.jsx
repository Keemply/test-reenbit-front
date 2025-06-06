import { getChats, updateProfile } from "../../chatApi";
import css from "./ModalUpdate.module.css";

export const ModalUpdate = ({ updateChat, setUpdateChat, setChats }) => {
  async function handleClick(e) {
    setUpdateChat(false);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await updateProfile({
        chatId: updateChat,
        firstName: e.target[0].value,
        lastName: e.target[1].value,
      });
      const data = await getChats();
      setChats(data.data.data);
      setUpdateChat(false);
    } catch (e) {
      console.log(e);
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
          <label className={css.label}>First name</label>
          <input className={css.input} name="FirstName" type="text"></input>
          <label className={css.label}>Last name</label>
          <input className={css.input} name="lastName"></input>
          <button type="submit" className={css.button}>
            Update chat
          </button>
        </form>
      </div>
    </div>
  );
};
