import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  title: z.string(),
  price: z.string(),
  description: z.string(),
  tags: z.string(),
  thumbnailBase64: z.instanceof(FileList),
  photoBase64: z.instanceof(FileList),
});
export type IProduct = z.infer<typeof schema>;
const useProductForm = () => {
  const [preview, setPreview] = useState("");

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<IProduct>({
    resolver: zodResolver(schema),
  });

  const watchedThumbnail = watch("thumbnailBase64");
  useEffect(() => {
    if (watchedThumbnail && watchedThumbnail.length > 0) {
      const file = watchedThumbnail[0];
      setPreview(URL.createObjectURL(file));
    }
  }, [watchedThumbnail]);

  return { preview, handleSubmit, register, isSubmitting, watch };
};

export default useProductForm;
