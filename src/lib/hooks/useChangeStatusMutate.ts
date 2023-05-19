import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changeSalesStatus } from "api";
import React from "react";

const useChangeStatusMutate = () => {
  const queryClient = useQueryClient();
  const { mutate: changeStatusMutate } = useMutation(
    (id: string) => changeSalesStatus(id, true, false),
    {
      onSuccess: () => {
        queryClient.invalidateQueries();
        alert("성공적으로 거래가 취소되었습니다.");
      },
    },
  );
  return { changeStatusMutate };
};

export default useChangeStatusMutate;
