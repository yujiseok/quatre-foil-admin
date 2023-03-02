import ProductForm from "@components/product/ProductForm";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import type { IProduct } from "api";
import { getProduct } from "api";
import type { Dispatch, SetStateAction } from "react";
import { useRef, useState } from "react";
import { useParams } from "react-router-dom";

const Product = () => {
  const [thumbnailBase64, setThumbnailBase64] = useState("");
  const [photoBase64, setPhotoBase64] = useState("");
  const { id } = useParams();
  const queryClient = useQueryClient();
  const { data, isError, isLoading, error } = useQuery<IProduct>({
    queryKey: ["products"],
    queryFn: () => getProduct(id as string),
  });

  if (isError) {
    console.log(error.response.data);
  }

  const toBase64 = (file: File, setState: Dispatch<SetStateAction<string>>) => {
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => setState(reader.result as string);
    }
  };

  return (
    <div>
      <h4 className="border-b-2 pb-3 text-xl font-semibold">
        제품 {id ? "수정" : "추가"}
      </h4>

      <ProductForm />
    </div>
  );
};
export default Product;
