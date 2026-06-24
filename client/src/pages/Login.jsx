import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";


function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    const res = await API.post(
      "/auth/login",
      form
    );

    localStorage.setItem(
      "token",
      res.data.token
    );

    navigate("/");
  };

  return (
    <form
      className="auth-form"
      onSubmit={submitHandler}
    >
      <h2>Login</h2>

      <input
        type="email"
        placeholder="Email"
        onChange={(e) =>
          setForm({
            ...form,
            email: e.target.value,
          })
        }
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setForm({
            ...form,
            password: e.target.value,
          })
        }
      />

      <button>Login</button>
    </form>
  );
}

export default Login;