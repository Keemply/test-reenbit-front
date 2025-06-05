import { useState } from "react";
import { deleteChat, getChats } from "../../chatApi";
import css from "./Chats.module.css";
import { ModalNew } from "../ModalNew/ModalNew";
import { ModalUpdate } from "../ModalUpdate/ModalUpdate";
export const Chats = ({ loggedIn, chats, setActiveChat, setChats, filter }) => {
  const filteredChats = chats.filter((chat) =>
    `${chat.firstName.toLowerCase()} ${chat.lastName.toLowerCase()}`.includes(
      filter.toLowerCase()
    )
  );

  const [newChat, setNewChat] = useState(false);
  const [updateChat, setUpdateChat] = useState(false);
  function handleNewChat() {
    setNewChat(true);
  }
  return (
    <>
      <div className={css.chatsCont}>
        <div className={css.chatButCont}>
          <h3 className={css.header}>Chats</h3>
          {loggedIn && (
            <button
              type="button"
              className={css.newChatBut}
              onClick={handleNewChat}
            >
              <svg className={css.newChatSvg}>
                <use
                  href="/svg/add-plus-svgrepo-com.svg#add"
                  className={css.icon}
                ></use>
              </svg>
            </button>
          )}
        </div>
        {loggedIn && (
          <ul className={css.chatsList}>
            {filteredChats.map((chat) => {
              async function handleClick() {
                setActiveChat(chat);
              }
              async function handleClickUpdate(e) {
                e.stopPropagation();
                setUpdateChat(chat._id);
              }
              async function handleClickBut(e) {
                e.stopPropagation();
                try {
                  await deleteChat({ data: { chatId: chat._id } });
                  const data = await getChats();
                  setChats(data.data.data);
                  setActiveChat({});
                } catch (e) {
                  console.log(e);
                }
              }
              return (
                <li
                  key={chat._id}
                  className={css.chatInst}
                  onClick={handleClick}
                >
                  <a className={css.button}>
                    <p
                      className={css.name}
                    >{`${chat.firstName} ${chat.lastName}`}</p>
                  </a>
                  <div className={css.butCont}>
                    <button
                      type="button"
                      className={css.deleteBut}
                      onClick={handleClickBut}
                    >
                      <svg className={css.deleteButSvg}>
                        <use
                          href="/svg/bin2.svg#delete"
                          className={css.deleteButUse}
                        ></use>
                      </svg>
                    </button>
                    <button
                      type="button"
                      className={css.deleteBut}
                      onClick={handleClickUpdate}
                    >
                      <svg className={css.deleteButSvg}>
                        <use
                          href="/public/svg/pencil.svg#update"
                          className={css.deleteButUse}
                        ></use>
                      </svg>
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      {newChat && <ModalNew setNewChat={setNewChat} setChats={setChats} />}
      {updateChat && (
        <ModalUpdate
          updateChat={updateChat}
          setUpdateChat={setUpdateChat}
          setChats={setChats}
        />
      )}
    </>
  );
};
