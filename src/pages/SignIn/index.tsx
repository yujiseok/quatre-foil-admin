import Form from "@components/Form";
import Heading from "@components/Heading";
import Input from "@components/Input";
import type { ChangeEvent } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
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
    <main className="mx-auto flex h-screen w-full max-w-screen-sm flex-col justify-center gap-4 px-4">
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
          className="mr-4 rounded bg-rose-300 px-4 py-2 font-semibold text-white"
        >
          로그인
        </button>
        <Link
          to="/signup"
          className="rounded border border-rose-300 px-4 py-2 font-semibold text-rose-400"
        >
          관리자 계정 생성
        </Link>
      </Form>
    </main>
  );
};
export default SignIn;
