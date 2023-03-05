import type { Dispatch, SetStateAction } from "react";
import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import type { IProductDetail } from "api";
import { editProduct, deleteProduct, addProduct } from "api";

const schema = z.object({
  title: z.string(),
  price: z.string(),
  description: z.string(),
  tags: z.string(),
  // thumbnailBase64: z.string(),
});
export type IProduct = z.infer<typeof schema>;

const ProductForm = ({
  product,
  isFetching,
}: {
  product?: IProductDetail;
  isFetching?: boolean;
}) => {
  const [thumbnailBase64, setThumbnailBase64] = useState("");
  const [photoBase64, setPhotoBase64] = useState("");

  const toBase64 = (file: File, setState: Dispatch<SetStateAction<string>>) => {
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => setState(reader.result as string);
    }
  };
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<IProduct>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: IProduct) => {
    const { title, price, description, tags } = data;

    const res = await addProduct(
      title,
      Number(price),
      description,
      tags.split(","),
      thumbnailBase64,
      photoBase64,
    );

    console.log(res);
  };
  const editSubmit = async (data: IProduct) => {
    const { title, price, description, tags } = data;

    const res = await editProduct(
      product?.id as string,
      title,
      Number(price),
      description,
      tags.split(","),
      // thumbnailBase64,
      // photoBase64,
    );

    console.log(res);
  };

  // useEffect(() => {
  //   if (isFetching === false && product) {
  //     setThumbnailBase64(product?.thumbnail as string);
  //     setPhotoBase64(product?.photo as string);
  //   }
  // }, [product, isFetching]);

  // console.log(thumbnailBase64);

  if (isFetching) return <div>loading...</div>;

  return (
    <form
      className="mt-4"
      onSubmit={product ? handleSubmit(editSubmit) : handleSubmit(onSubmit)}
    >
      <div className="mb-4 flex flex-col">
        <label htmlFor="title">제품 이름</label>
        <input
          type="text"
          className="rounded border border-gray-400 p-2 focus:outline-rose-300"
          {...register("title", {
            value: `${product ? `${product.title}` : ""}`,
          })}
        />
      </div>
      <div className="mb-4 flex flex-col">
        <label htmlFor="thumbnailBase64">제품 썸네일</label>
        <input
          type="file"
          onChange={(e) => {
            if (!e.target.files) return;
            toBase64(e.target.files[0], setThumbnailBase64);
          }}
        />
      </div>
      <div className="mb-4 flex flex-col">
        <label htmlFor="price">가격</label>
        <input
          type="text"
          className="rounded border border-gray-400 p-2 focus:outline-rose-300"
          {...register("price", {
            value: `${product ? `${product.price}` : ""}`,
          })}
        />
      </div>
      <div className="mb-4 flex flex-col">
        <label htmlFor="description">제품 상세 설명</label>
        <textarea
          {...register("description", {
            value: `${product ? `${product.description}` : ""}`,
          })}
          className="resize-none rounded border border-gray-400 p-2 focus:outline-rose-300"
        />
      </div>
      <div className="mb-4 flex flex-col">
        <label htmlFor="photoBase64">제품 상세 사진</label>
        <input
          type="file"
          id="photoBase64"
          onChange={(e) => {
            if (!e.target.files) return;
            toBase64(e.target.files[0], setPhotoBase64);
          }}
        />
      </div>
      <div className="mb-4 flex flex-col">
        <label htmlFor="tags">제품 태그</label>
        <input
          type="text"
          className="rounded border border-gray-400 p-2 focus:outline-rose-300"
          {...register("tags", {
            value: `${!isFetching && product ? `${product?.tags}` : ""}`,
          })}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="mr-4 cursor-pointer rounded border border-rose-300 py-2 px-4"
      >
        {product ? "수정" : "등록"}
      </button>
      <button
        type="button"
        className="cursor-pointer rounded border bg-gray-400 py-2 px-4 text-white"
        onClick={() => deleteProduct(product?.id as string)}
      >
        삭제
      </button>
    </form>
  );
};
export default ProductForm;
