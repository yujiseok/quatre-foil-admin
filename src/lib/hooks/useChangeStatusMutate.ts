import { useMutation, useQueryClient } from "@tanstack/react-query";
import { changeSalesStatus } from "api";
import React from "react";

const useChangeStatusMutate = () => {
  const queryClient = useQueryClient();
  const { mutate: changeStatusMutate } = useMutation(
    (id: string) => changeSalesStatus(id, true, true),
    {
      onSuccess: () => {
        queryClient.invalidateQueries();
      },
    },
  );
  return { changeStatusMutate };
};

export default useChangeStatusMutate;
