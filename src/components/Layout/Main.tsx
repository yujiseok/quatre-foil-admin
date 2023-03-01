import Heading from "@components/Heading";
import { Outlet } from "react-router-dom";
import Aside from "./Aside";

interface Props {}
const Main = (props: Props) => {
  return (
    <main className="mx-auto h-full max-w-7xl px-4">
      <header>
        <Heading className="mt-8">QUATRE FOIL Admin</Heading>
        <div>
          <img src="" alt="" />
          <div>유저이름</div>
        </div>
      </header>
      <div className="mt-4 flex gap-4">
        <Aside />
        <section className="flex-1 rounded-md border-2 border-rose-200 p-4 ">
          <Outlet />
        </section>
      </div>
    </main>
  );
};

export default Main;
