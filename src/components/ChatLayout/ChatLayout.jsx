import toast from "react-hot-toast";
import { getChats, updateChat } from "../../chatApi";
import { randomQuote } from "../../quoteApi";
import css from "./ChatLayout.module.css";
export const ChatLayout = ({ activeChat, setActiveChat, setChats }) => {
  async function handleSubmit(e) {
    e.preventDefault();
    const data = await updateChat({
      chatId: activeChat._id,
      newMessage: {
        text: e.target[0].value,
        timeStamp: Date.now(),
        userMessage: true,
      },
    });
    setTimeout(() => {
      randomQuote().then((response) => {
        updateChat({
          chatId: activeChat._id,
          newMessage: {
            text: response.data.quote,
            timeStamp: Date.now(),
            userMessage: false,
          },
        }).then((response) => {
          setActiveChat(response.data.data);
        });
        toast.success(response.data.quote);
      });
    }, 3000);
    const allData = await getChats();
    setChats(allData.data.data);
    setActiveChat(data.data.data);
    e.target[0].value = "";
  }
  return (
    <div className={css.cont}>
      <div className={css.profileCont}>
        {Object.keys(activeChat).length > 0 && (
          <p>{`${activeChat.firstName} ${activeChat.lastName}`}</p>
        )}
      </div>
      <ul className={css.messages}>
        {Object.keys(activeChat).length > 0 &&
          activeChat.messages.map((message) => {
            return (
              <li
                key={message._id}
                className={
                  message.userMessage ? css.userMessage : css.notUserMessage
                }
              >
                <p
                  className={
                    message.userMessage ? css.userText : css.notUserText
                  }
                >{`${message.text}`}</p>
                <p className={css.timeStamp}>
                  {`${new Intl.DateTimeFormat("en-US", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  }).format(new Date(message.timeStamp))}`}
                </p>
              </li>
            );
          })}
      </ul>
      <div className={css.createMess}>
        <form action="" className={css.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="message"
            placeholder="Type your message"
            className={css.input}
            required
          />
          {Object.keys(activeChat).length > 0 ? (
            <button type="submit" className={css.formBut}>
              <svg className={css.closeSvg}>
                <use
                  href="/svg/arrow-narrow-right.svg#send"
                  className={css.send}
                ></use>
              </svg>
            </button>
          ) : (
            <button type="submit" className={css.formBut} disabled>
              <svg className={css.closeSvg}>
                <use
                  href="/svg/arrow-narrow-right.svg#send"
                  className={css.send}
                ></use>
              </svg>
            </button>
          )}
        </form>
      </div>
    </div>
  );
};
