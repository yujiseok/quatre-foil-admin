import { useQuery } from "@tanstack/react-query";
import { getSalesList } from "api";
import React from "react";

const useGetSalesListQuery = () => {
  const { data: salesList } = useQuery({
    queryKey: ["salesList"],
    queryFn: getSalesList,
  });

  return { salesList };
};

export default useGetSalesListQuery;
