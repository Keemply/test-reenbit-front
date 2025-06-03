import { useEffect, useState } from "react";
import "./App.css";
import { Chats } from "./components/Chats/Chats.jsx";
import { Search } from "./components/Search/Search.jsx";
import { ModalReg } from "./components/ModalReg/ModalReg.jsx";
import { ModalLog } from "./components/ModalLog/ModalLog.jsx";
import { getChats, refresh } from "./chatApi.js";

function App() {
  const [register, setRegister] = useState(false);
  const [login, setLogin] = useState(false);
  const [activeChat, setActiveChat] = useState({});
  // useEffect(() => {
  //   const gettingChats = async () => {
  //     try {
  //       const chats = await refresh();
  //     } catch (e) {}
  //   };
  //   gettingChats();
  // });
  return (
    <>
      <div>
        <Search setLogin={setLogin} setRegister={setRegister} />
        <Chats />
      </div>
      <div></div>
      {login && <ModalLog setLogin={setLogin} />}
      {register && <ModalReg setRegister={setRegister} />}
    </>
  );
}

export default App;
