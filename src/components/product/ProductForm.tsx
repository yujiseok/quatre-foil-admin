import type { IProductDetail } from "api";
import { editProduct, deleteProduct, addProduct } from "api";
import { toBase64 } from "lib/utils/toBase64";
import type { IProduct } from "lib/hooks/useProductForm";
import useProductForm from "lib/hooks/useProductForm";
import { useNavigate } from "react-router-dom";

const ProductForm = ({
  product,
  isFetching,
}: {
  product?: IProductDetail;
  isFetching?: boolean;
}) => {
  const { preview, handleSubmit, isSubmitting, register } = useProductForm();
  const navigate = useNavigate();

  const onSubmit = async (data: IProduct) => {
    const newData = {
      ...data,
      price: Number(data.price),
      tags: data.tags.split(","),
      thumbnailBase64: (await toBase64(data.thumbnailBase64[0])) as string,
      photoBase64: (await toBase64(data.photoBase64[0])) as string,
    };
    const res = product
      ? await editProduct(product.id, newData)
      : await addProduct(newData);
    if (res.id) {
      navigate("/");
    }
  };

  if (isFetching) return <div>loading...</div>;

  return (
    <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
      {product?.thumbnail ? (
        <div className="mx-auto h-72 w-72 border">
          <label htmlFor="thumbnailBase64">
            <img
              src={preview || product.thumbnail}
              alt={product.title}
              className="h-full w-full cursor-pointer"
            />
          </label>

          <input
            type="file"
            id="thumbnailBase64"
            {...register("thumbnailBase64")}
            className="hidden"
          />
        </div>
      ) : null}

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
        {/* <label htmlFor="thumbnailBase64">제품 썸네일</label>
        <input type="file" {...register("thumbnailBase64")} /> */}
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
        <input type="file" {...register("photoBase64")} />
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
