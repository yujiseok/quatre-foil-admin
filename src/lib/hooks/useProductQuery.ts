import { useQuery } from "@tanstack/react-query";
import type { IProductDetail } from "api";
import { getProduct } from "api";

const useProductQuery = (id: string) => {
  const { data: product, isFetching } = useQuery<IProductDetail>({
    queryKey: ["product"],
    queryFn: () => getProduct(id),
  });
  return { product, isFetching };
};
export default useProductQuery;
