import Heading from "@components/Heading";
import { Outlet } from "react-router-dom";
import Aside from "./Aside";

interface Props {}
const Main = (props: Props) => {
  return (
    <main className="max-w-7xl mx-auto px-4 h-full">
      <Heading className="mt-14">QUATRE FOIL Admin</Heading>
      <div className="flex gap-4 mt-4">
        <Aside />
        <section className="p-4 border-2 rounded-md flex-1 ">
          <Outlet />
        </section>
      </div>
    </main>
  );
};

export default Main;
