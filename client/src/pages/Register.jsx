import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api/axios";


function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const submitHandler = async (e) => {
    e.preventDefault();

    await API.post(
      "/auth/register",
      form
    );

    navigate("/login");
  };

  return (
    <form
      className="auth-form"
      onSubmit={submitHandler}
    >
      <h2>Register</h2>

      <input
        type="text"
        placeholder="Name"
        onChange={(e) =>
          setForm({
            ...form,
            name: e.target.value,
          })
        }
      />

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

      <button>Register</button>
    </form>
  );
}

export default Register;