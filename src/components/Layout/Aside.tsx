import { NavLink } from "react-router-dom";
import AsideBtn from "./AsideBtn";

interface Props {}
const LIST = [
  { to: "/", title: "전체 목록 조회" },
  { to: "/sales/detail", title: "판매 내역" },
  // { to: "/sales/cancel", title: "판매 내역 취소" },
  { to: "/product/add", title: "제품 추가" },
];

const Aside = (props: Props) => {
  return (
    <aside className="w-40 rounded border-2 border-rose-200 p-4">
      <ul>
        {LIST.map((item) => (
          <li key={item.title}>
            <NavLink
              to={item.to}
              style={({ isActive }) => ({
                // textDecorationLine: isActive ? "underline" : "none",
                fontWeight: isActive ? "700" : "normal",
              })}
            >
              <AsideBtn>{item.title}</AsideBtn>
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};
export default Aside;
