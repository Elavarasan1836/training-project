import React,{useContext} from 'react';
import logo from "../img/Free Instagram Logo Vector.jpg";
import "./Navbar.css";
import { Link } from 'react-router-dom';
import { LoginContext } from "../context/LoginContext";


export default function Navbar({ login }) {
  const { setModalOpen } = useContext(LoginContext);
  const loginStatus = () => {
    const token = localStorage.getItem("jwt");
    if (login || token) {
      return [
        <>
          <Link to="/profile">
            <li style={{fontSize:20,fontWeight:'700',color:'red'}}>Profile</li>
          </Link>
          <Link to="/createPost">Create Post</Link>
          <Link style={{ marginLeft: "20px",fontWeight:'700',color:'gainsboro' }} to="/followingpost">
            My Following
          </Link>
          <Link to={""}>
            <button style={{ marginLeft: "20px",fontWeight:'700',color:'gainsboro' }} className="primaryBtn" onClick={() => setModalOpen(true)}>
              Log Out
            </button>
          </Link>
        </>,
      ];
    } else {
      return [
        <>
          <Link to="/signup">
            <li>SignUp</li>
          </Link>
          <Link to="/signin">
            <li>SignIn</li>
          </Link>
        </>,
      ];
    }
  };

  return (
    <div className="navbar">
      <img src={logo} alt="" />
      <ul className="nav-menu">{loginStatus()}</ul>
    </div>
  );
}