import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/api";
import Modal from "react-modal";
import closeModalButton from "../assets/x.png";

const customStyles = {
  content: {
    width: "250px",
    height: "250px",
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
};

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [status, setStatus] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);

  async function Login(email, password) {
    await api
      .post("/auth", {
        email: email,
        password: password,
      })
      .then((response) => {
        setStatus("Salvo com sucesso!");
        setUser(response.data);
        localStorage.setItem("@App:user", JSON.stringify(response.data));
      })
      .catch((exception) => {
        setStatus(exception.response.data);
        openModal();
      });
  }

  function Logout() {
    setUser(null);
    localStorage.removeItem("@App:user", JSON.stringify(user));
  }

  useEffect(() => {
    const storagedUser = localStorage.getItem("@App:user");
    // const storagedToken = localStorage.getItem('@App:token');

    if (storagedUser) {
      setUser(JSON.parse(storagedUser));
      // api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
    }
  }, []);

  function openModal() {
    setIsOpen(true);
  }

  //Método para fechar modal
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <AuthContext.Provider
      value={{ signed: Boolean(user), user, Login, Logout }}
    >
      {children}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <img
          width="14px"
          height="14px"
          src={closeModalButton}
          alt="fechar modal"
          style={{
            position: "absolute",
            top: "8px",
            right: "8px",
            cursor: "pointer",
          }}
          onClick={closeModal}
        />
        <h1 style={{ marginTop: "8px", textAlign: "center", fontSize: "20px" }}>
          {status}
        </h1>
      </Modal>
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export default AuthContext;
