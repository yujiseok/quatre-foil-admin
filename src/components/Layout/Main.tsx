import Heading from "@components/Heading";
import { Link, Outlet } from "react-router-dom";
import Aside from "./Aside";

interface Props {}
const Main = (props: Props) => {
  return (
    <main className="mx-auto h-full max-w-7xl px-4 pb-8">
      <header className="mt-4 flex h-14 items-center justify-between">
        <Heading>
          <Link to="/">QUATRE FOIL Admin</Link>
        </Heading>
        {/* <div className="flex items-center gap-2">
          <div className="h-12 w-12 overflow-hidden rounded-full">
            <img
              className="h-full w-full"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
              alt=""
            />
          </div>
          <div>유저이름</div>
        </div> */}
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
