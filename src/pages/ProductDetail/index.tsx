import ProductForm from "@components/product/ProductForm";
import useProductQuery from "lib/hooks/useProductQuery";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const { product, isFetching } = useProductQuery(id as string);

  return (
    <div>
      <h4 className="border-b-2 pb-3 text-xl font-semibold">
        제품 {id ? "수정" : "추가"}
      </h4>

      <ProductForm product={product} isFetching={isFetching} />
    </div>
  );
};
export default ProductDetail;
