import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authApi } from "../../axios/auth";

const LoginPage = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onChangeIdHandler = (e) => {
    setId(e.target.value);
  };
  const onChangePasswordHandler = (e) => {
    setPassword(e.target.value);
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const { data } = await authApi.post("/register", {
        id,
        password,
      });
      console.log("data", data);
    } catch (error) {
      alert(error.message);
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <p>Login page</p>

      <form onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="id">id</label>
          <input onChange={onChangeIdHandler} value={id} />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input onChange={onChangePasswordHandler} value={password} />
        </div>

        <button type="submit">Login</button>
        <button
          type="button"
          onClick={() => {
            navigate("/signup");
          }}
        >
          회원가입하러가기
        </button>
        <button
          type="button"
          onClick={() => {
            navigate("/");
          }}
        >
          홈으로
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
