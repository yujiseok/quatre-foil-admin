import ProductForm from "@components/product/ProductForm";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getProduct } from "api";
import type { IProductDetail } from "api";
import { AxiosError } from "axios";

import type { Dispatch, SetStateAction } from "react";
import { useRef, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const [thumbnailBase64, setThumbnailBase64] = useState("");
  const [photoBase64, setPhotoBase64] = useState("");
  const { id } = useParams();
  const queryClient = useQueryClient();
  const {
    data: product,
    isError,
    isLoading,
    isFetching,
    error,
  } = useQuery<IProductDetail>({
    queryKey: ["product"],
    queryFn: () => getProduct(id as string),
  });

  if (isError) {
    if (error instanceof AxiosError) console.log(error.response?.data);
  }

  console.log(isFetching);

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
