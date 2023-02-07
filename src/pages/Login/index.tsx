import Form from "@components/Form";
import Heading from "@components/Heading";
import Input from "@components/Input";
import type { ChangeEvent } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    displayName: "",
    email: "",
    password: "",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;

    setUser({ ...user, [name]: value });
  };
  return (
    <main className="w-full h-screen mx-auto max-w-screen-sm px-4 flex flex-col gap-4 justify-center">
      <Heading className="text-center">로그인</Heading>
      <Form>
        <Input
          type="email"
          placeholder="이메일을 입력하세요"
          name="email"
          value={user.email}
          onChange={onChange}
        />
        <br />
        <Input
          type="password"
          placeholder="비밀번호를 입력하세요"
          name="password"
          value={user.password}
          onChange={onChange}
        />
        <button
          type="submit"
          className="px-4 py-2 rounded bg-rose-300 text-white mr-4 font-semibold"
        >
          로그인
        </button>
        <Link
          to="/signup"
          className="px-4 py-2 rounded border-rose-300 border text-rose-400 font-semibold"
        >
          관리자 계정 생성
        </Link>
      </Form>
    </main>
  );
};
export default Login;
