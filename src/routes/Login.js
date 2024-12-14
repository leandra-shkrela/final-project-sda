import React, { useState, useEffect } from "react";
import "./ContactUs.css";
import Header from "./Header";
import Footer from "./Footer";
import "./Login.css";
import { users } from "../data/users";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [usersList, setUsersList] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Assuming getData is an async function
        // const data = await filteredItem();
        // console.log(data);
        console.log(users);

        // setUsersList(users); // Store the fetched data in state
        // console.log(usersList);
        setLoaded(true); // Update loading state after data is fetched
      } catch (error) {
        console.error("Error fetching data: ", error);
        setLoaded(true); // Ensure loading state is updated even if fetching fails
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  const handleLogin = async (e) => {
    e.preventDefault();
    if (users.find((user) => user.name == email && user.password == password)) {
      //localStorage.setItem("token", data.token);
      alert("Logged in successfully!");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <>
      <Header></Header>
      {!loaded ? (
        <p>Loading ....</p>
      ) : (
        <form className="form" onSubmit={handleLogin}>
          <h2>Log In</h2>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Log In</button>
        </form>
      )}
      <Footer></Footer>
    </>
  );
}

export default Login;
