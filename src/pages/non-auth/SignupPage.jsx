import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authApi } from "../../axios/auth";

const SignupPage = () => {
  const navigate = useNavigate();

  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const onChangeIdHandler = (e) => {
    setId(e.target.value);
  };
  const onChangePasswordHandler = (e) => {
    setPassword(e.target.value);
  };
  const onChangeNicknameHandler = (e) => {
    setNickname(e.target.value);
  };

  const onSubmitApi = async (e) => {
    e.preventDefault();
    try {
      const { data } = await authApi.post("/register", {
        id,
        password,
        nickname,
      });
      navigate("/login");
      console.log("data ", data);
    } catch (error) {
      alert(error.message);
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Signup</h1>
      <p>Signup page</p>

      <form onSubmit={onSubmitApi}>
        <div>
          <label htmlFor="id">id</label>
          <input onChange={onChangeIdHandler} value={id} />
        </div>
        <div>
          <label htmlFor="nickname">nickname</label>
          <input onChange={onChangeNicknameHandler} value={nickname} />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input onChange={onChangePasswordHandler} value={password} />
        </div>

        <button type="submit">Signup</button>
        <button
          type="button"
          onClick={() => {
            navigate("/login");
          }}
        >
          로그인하러가기
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

export default SignupPage;
