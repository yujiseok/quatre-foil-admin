import { Link } from "react-router-dom";
import useAllProductsQuery from "lib/hooks/useAllProductsQuery";
import usePagination from "lib/hooks/usePagination";

const ProductsList = () => {
  const { products } = useAllProductsQuery();
  const { totalPage, offset, limit, handleClick, page } =
    usePagination(products);

  return (
    <>
      <h4 className="border-b-2 pb-3 text-xl font-semibold">제품 목록</h4>
      <ul className="mt-4 grid grid-cols-fluid gap-1">
        {products?.slice(offset, offset + limit).map((product) => (
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
      <div className="flex items-center justify-center gap-4 pt-4">
        <button
          type="button"
          disabled={page === `1`}
          onClick={() => handleClick(Number(page) - 1)}
        >
          prev
        </button>
        {Array(totalPage)
          .fill(null)
          .map((_, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <button type="button" key={i} onClick={() => handleClick(i + 1)}>
              {i + 1}
            </button>
          ))}
        <button
          type="button"
          disabled={page >= `${totalPage}`}
          onClick={() => handleClick(Number(page) + 1)}
        >
          next
        </button>
      </div>
    </>
  );
};
export default ProductsList;
