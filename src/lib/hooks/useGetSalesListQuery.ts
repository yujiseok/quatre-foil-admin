import { useQuery } from "@tanstack/react-query";
import { getSalesList } from "api";
import type { TransactionDetail } from "api";

const useGetSalesListQuery = () => {
  const { data: salesList } = useQuery({
    queryKey: ["salesList"],
    queryFn: getSalesList,
    select: (data) =>
      data.sort(
        (a: TransactionDetail, b: TransactionDetail) =>
          new Date(b.timePaid).getDate() - new Date(a.timePaid).getDate(),
      ),
  });

  return { salesList };
};

export default useGetSalesListQuery;
