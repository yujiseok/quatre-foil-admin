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
    <main className="w-full h-screen mx-auto max-w-screen-sm px-4 flex flex-col gap-4 justify-center">
      <Heading>관리자 계정 생성</Heading>
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
          className="px-4 py-2 rounded bg-rose-300 text-white mr-4 font-semibold"
        >
          계정생성
        </button>
        <div className="font-light mt-2 text-sm">
          계정이 있으신가요?{" "}
          <Link to="/" className="font-semibold underline">
            로그인하러 가기
          </Link>
        </div>
      </Form>
    </main>
  );
};
export default SignUp;
