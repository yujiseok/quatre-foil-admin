import type { AxiosPromise } from "axios";
import { AxiosError, AxiosResponse } from "axios";
import { client } from "./core/api";

// 제품

// 제품 목록 조회
export interface Product {
  id: string; // 제품 ID
  title: string; // 제품 이름
  price: number; // 제품 가격
  description: string; // 제품 설명(최대 100자)
  tags: string[]; // 제품 태그
  thumbnail: string | null; // 제품 썸네일 이미지(URL)
  isSoldOut: boolean; // 제품 매진 여부
}

export const getProducts = async () => {
  const { data } = await client.get<Product[]>("/products");

  return data;
};

export interface IProductDetail {
  // 제품의 상세 내용
  id: string; // 제품 ID
  title: string; // 제품 이름
  price: number; // 제품 가격
  description: string; // 제품 상세 설명
  tags: string[]; // 제품 태그
  thumbnail: string | null; // 제품 썸네일 이미지(URL)
  photo: string | null; // 제품 상세 이미지(URL)
  isSoldOut: boolean; // 제품 매진 여부
}

export const getProduct = async (id: string) => {
  const { data } = await client.get<IProductDetail>(`/products/${id}`);

  return data;
};
// 거래 내역 조회
interface TransactionDetail {
  // 거래 내역 정보
  detailId: string; // 거래 내역 ID
  user: {
    // 거래한 사용자 정보
    email: string;
    displayName: string;
    profileImg: string | null;
  };
  account: {
    // 거래한 사용자의 계좌 정보
    bankName: string;
    bankCode: string;
    accountNumber: string;
  };
  product: {
    // 거래한 제품 정보
    productId: string;
    title: string;
    price: number;
    description: string;
    tags: string[];
    thumbnail: string | null;
  };
  reservation?: null; // 거래한 제품의 예약 정보
  timePaid: string; // 제품을 거래한 시간
  isCanceled: boolean; // 거래 취소 여부
  done: boolean; // 거래 완료 여부
}

export const getTransactionDetail = async () => {
  const { data } = await client.get<TransactionDetail[]>(
    "/products/transactions/all",
  );

  return data;
};

// 제품 추가

interface AddFunc {
  (
    title?: string,
    price?: number,
    description?: string,
    tags?: string[],
    thumbnailBase64?: string,
    photoBase64?: string,
  ): AxiosPromise<AddProductResponse>;
}
interface EditFunc {
  (
    id?: string,
    title?: string,
    price?: number,
    description?: string,
    tags?: string[],
    thumbnailBase64?: string,
    photoBase64?: string,
  ): AxiosPromise<AddProductResponse>;
}
export interface AddProductResponse {
  // 추가한 제품의 상세 내용
  id: string; // 제품 ID
  title: string; // 제품 이름
  price: number; // 제품 가격
  description: string; // 제품 상세 설명
  tags: string[]; // 제품 태그
  thumbnail: string | null; // 제품 썸네일 이미지(URL)
  photo: string | null; // 제품 상세 이미지(URL)
  isSoldOut: boolean; // 제품 매진 여부
}
export const addProduct: AddFunc = async (
  title,
  price,
  description,
  tags,
  thumbnailBase64,
  photoBase64,
) => {
  const { data } = await client({
    method: "post",
    url: "/products",
    data: {
      title,
      price,
      description,
      tags,
      thumbnailBase64,
      photoBase64,
    },
  });

  return data;
};

export const editProduct: EditFunc = async (
  id,
  title,
  price,
  description,
  tags,
  thumbnailBase64,
  photoBase64,
) => {
  const { data } = await client({
    method: "put",
    url: `/products/${id}`,
    data: {
      title,
      price,
      description,
      tags,
      thumbnailBase64,
      photoBase64,
    },
  });

  return data;
};

// 제품 삭제
export const deleteProduct = async (id: string) => {
  const res = await client({
    method: "delete",
    url: `/products/${id}`,
  });

  return res;
};
