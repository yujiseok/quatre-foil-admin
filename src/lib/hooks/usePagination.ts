import type { Product } from "api";
import { useSearchParams } from "react-router-dom";

const usePagination = (products: Product[] | undefined) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const limit = 10;
  const page = searchParams.get("page") ?? 1;
  const totalProducts = products?.length;
  const totalPage = totalProducts ? Math.ceil(totalProducts / limit) : 1;
  const offset = (Number(page) - 1) * limit;

  // eslint-disable-next-line no-shadow, @typescript-eslint/no-shadow
  const handleClick = (page: number) => {
    setSearchParams({ page: page.toString() });
  };
  return { totalPage, offset, handleClick, limit, page };
};
export default usePagination;
