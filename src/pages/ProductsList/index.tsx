import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import type { Product } from "api";
import { getProducts } from "api";
// import { getProducts } from "api";

interface Props {}
const ProductsList = (props: Props) => {
  const queryClient = useQueryClient();
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  if (isLoading) return <div>Loading....</div>;

  return (
    <>
      <h4 className="border-b-2 pb-3 text-xl font-semibold">제품 목록</h4>
      <ul className="mt-4 grid grid-cols-fluid gap-1">
        {products &&
          products?.map((product) => (
            <li
              className="flex flex-col items-center gap-2 rounded border p-4"
              key={product.id}
            >
              <Link to={`/product/${product.id}`}>
                <div className="mb-3 h-44 w-44">
                  <img
                    className="block h-full w-full object-cover"
                    src={product.thumbnail as string}
                    alt={product.title}
                  />
                </div>
                <div className="w-full">
                  <div>{product.title}</div>
                  <div>{product.price.toLocaleString()}원</div>
                </div>
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
};
export default ProductsList;
