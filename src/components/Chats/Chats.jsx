import { ChatInstance } from "../ChatInstatce/ChatInstance";
import css from "./Chats.module.css";
export const Chats = () => {
  return (
    <div className={css.chatsCont}>
      <h3 className={css.header}>Chats</h3>
      <ul className={css.chatsList}></ul>
    </div>
  );
};
