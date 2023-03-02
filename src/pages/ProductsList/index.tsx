import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import type { Product } from "api";
import { getProducts } from "api";
// import { getProducts } from "api";

interface Props {}
const ProductsList = (props: Props) => {
  const queryClient = useQueryClient();
  const { data: products } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  console.log(products);

  return (
    <>
      <h4 className="border-b-2 pb-3 text-xl font-semibold">제품 목록</h4>
      <ul className="mt-4 grid grid-cols-fluid gap-1">
        <li className="flex flex-col items-center gap-2 rounded border p-4">
          <Link to="/product/123">
            <div className="">
              <img
                className="block h-full w-full"
                src="https://images.ctfassets.net/4g6al16haqoj/2JGS5COOK1nLB2BjFed9JD/c811f72ef3484b62b9b3a863f307f3df/percalebedding_islandblue_duvet_1.jpg?w=2000&h=2500&q=50&fm=webp"
                alt=""
              />
            </div>
            <div className="w-full">
              <div>매우 편안한 침대</div>
              <div>5000원</div>
            </div>
          </Link>
        </li>
        <li className="rounded border p-4">item2</li>
        <li className="rounded border p-4">item3</li>
        <li className="rounded border p-4">item4</li>
        <li className="rounded border p-4">item5</li>
      </ul>
    </>
  );
};
export default ProductsList;
