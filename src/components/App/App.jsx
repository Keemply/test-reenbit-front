import { useEffect, useState } from "react";
import css from "./App.module.css";
import { Chats } from "../Chats/Chats.jsx";
import { Search } from "../Search/Search.jsx";
import { ModalReg } from "../ModalReg/ModalReg.jsx";
import { ModalLog } from "../ModalLog/ModalLog.jsx";
import { getChats, refresh } from "../../chatApi.js";
import { ChatLayout } from "../ChatLayout/ChatLayout.jsx";
import { Toaster } from "react-hot-toast";

function App() {
  const [filter, setFilter] = useState("");
  const [register, setRegister] = useState(false);
  const [login, setLogin] = useState(false);
  const [activeChat, setActiveChat] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const [chats, setChats] = useState([]);
  useEffect(() => {
    const gettingChats = async () => {
      if (loggedIn) {
        await refresh();
      }
    };
    gettingChats();
  });
  useEffect(() => {
    const gettingChats = async () => {
      if (loggedIn) {
        const data = await getChats();
        setChats(data.data.data);
      }
    };
    gettingChats();
  }, [loggedIn]);
  return (
    <>
      <div className={css.cont}>
        <div className={css.searchChats}>
          <Search
            setLogin={setLogin}
            setRegister={setRegister}
            loggedIn={loggedIn}
            setFilter={setFilter}
          />
          <Chats
            loggedIn={loggedIn}
            chats={chats}
            setActiveChat={setActiveChat}
            setChats={setChats}
            filter={filter}
          />
        </div>
        <ChatLayout
          activeChat={activeChat}
          setActiveChat={setActiveChat}
          setChats={setChats}
        />
      </div>
      {login && <ModalLog setLogin={setLogin} setLoggedIn={setLoggedIn} />}
      {register && <ModalReg setRegister={setRegister} />}
      <Toaster />
    </>
  );
}

export default App;
