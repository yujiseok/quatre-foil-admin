import type { Dispatch, SetStateAction } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { addProduct } from "api";

const schema = z.object({
  title: z.string(),
  price: z.string(),
  description: z.string(),
  tags: z.string(),
  // thumbnailBase64: z.string(),
});
export type IProduct = z.infer<typeof schema>;

const ProductForm = () => {
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
      [tags],
      thumbnailBase64,
      photoBase64,
    );

    console.log(res);
  };

  return (
    <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4 flex flex-col">
        <label htmlFor="title">제품 이름</label>
        <input
          type="text"
          className="rounded border border-gray-400 p-2 focus:outline-rose-300"
          {...register("title")}
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
          {...register("price")}
        />
      </div>
      <div className="mb-4 flex flex-col">
        <label htmlFor="description">제품 상세 설명</label>
        <textarea
          {...register("description")}
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
          {...register("tags")}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="cursor-pointer rounded border border-rose-300 py-2 px-4"
      >
        등록
      </button>
    </form>
  );
};
export default ProductForm;
