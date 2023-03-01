import Form from "@components/Form";
import Heading from "@components/Heading";
import Input from "@components/Input";
import type { ChangeEvent } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
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
      <Heading className="text-center">관리자 계정 생성</Heading>
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
          type="text"
          placeholder="이름을 입력하세요"
          name="displayName"
          value={user.displayName}
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
          계정생성
        </button>
        <div className="mt-2 text-sm font-light">
          계정이 있으신가요?{" "}
          <Link to="/login" className="font-semibold underline">
            로그인하러 가기
          </Link>
        </div>
      </Form>
    </main>
  );
};
export default SignUp;
