const Login = () => {
  return (
    <main className="w-full h-screen mx-auto max-w-screen-sm px-4 flex flex-col gap-4 justify-center">
      <h2 className="text-center font-semibold text-2xl">로그인</h2>
      <form className="w-96 mx-auto border-2 border-rose-300 px-6 py-10 rounded shadow-lg bg-white">
        <input
          className="w-full px-2 py-2 border border-gray-200 rounded mb-4 focus:outline-none focus:border-rose-400"
          type="text"
          placeholder="이메일을 입력하세요"
        />
        <br />
        <input
          className="w-full px-2 py-2 border border-gray-200 rounded mb-4 focus:outline-none focus:border-rose-400"
          type="password"
          placeholder="비밀번호를 입력하세요"
        />
        <button
          type="submit"
          className="px-4 py-2 rounded bg-rose-300 text-white mr-4 font-semibold"
        >
          로그인
        </button>
        <button
          type="submit"
          className="px-4 py-2 rounded border-rose-300 border text-rose-400 font-semibold"
        >
          관리자 계정 생성
        </button>
      </form>
    </main>
  );
};
export default Login;
