import { Link } from "react-router-dom";
import AsideBtn from "./AsideBtn";

interface Props {}
const LIST = [
  { to: "/", title: "전체 목록 조회" },
  { to: "/sales/detail", title: "판매 내역" },
  { to: "/sales/cancel", title: "판매 내역 취소" },
  { to: "/product/add", title: "제품 추가" },
];

const Aside = (props: Props) => {
  return (
    <aside className="h-full border-2 p-4 rounded w-40">
      <ul>
        {LIST.map((item) => (
          <li key={item.title}>
            <Link to={item.to}>
              <AsideBtn>{item.title}</AsideBtn>
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};
export default Aside;
