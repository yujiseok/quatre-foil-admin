import { useQuery } from "@tanstack/react-query";
import { getProducts } from "api";

const useAllProductsQuery = () => {
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return { products };
};
export default useAllProductsQuery;
