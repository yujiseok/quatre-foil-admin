import type { TransactionDetail } from "api";
import useChangeStatusMutate from "lib/hooks/useChangeStatusMutate";
import useGetSalesListQuery from "lib/hooks/useGetSalesListQuery";
import usePagination from "lib/hooks/usePagination";

const SalesList = () => {
  const { salesList } = useGetSalesListQuery();
  const { changeStatusMutate } = useChangeStatusMutate();
  const { totalPage, offset, limit, handleClick, page } =
    usePagination(salesList);

  return (
    <div>
      <h4 className="border-b-2 pb-3 text-xl font-semibold">판매 내역</h4>
      <ul className="mt-4">
        {salesList
          .slice(offset, offset + limit)
          .map((item: TransactionDetail) => (
            <li
              key={item.timePaid}
              className="mb-3 flex justify-between border-2 px-3 py-4"
            >
              <div className="flex gap-5">
                <div className="w-40">
                  <img src={item.product.thumbnail!} alt={item.product.title} />
                </div>
                <div>
                  <p className="text-bold font-semibold">
                    {item.product.title}
                  </p>
                  <p className="text-sm text-slate-500">
                    {new Date(item.timePaid).toLocaleDateString()} 결제
                  </p>
                  <p>금액 {item.product.price.toLocaleString()}원</p>
                  <p>결제 수단 {item.account.bankName}</p>
                  <p>취소 여부 {item.isCanceled ? "o" : "x"}</p>
                  <p>확정 여부 {item.done ? "o" : "x"}</p>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                {!item.isCanceled && !item.done ? (
                  <button
                    type="button"
                    className="cursor-pointer border p-3"
                    onClick={() => changeStatusMutate(item.detailId)}
                  >
                    거래 취소
                  </button>
                ) : null}
              </div>
            </li>
          ))}
      </ul>
      <div className="flex items-center justify-center gap-4 pt-4">
        <button
          type="button"
          disabled={page === `1`}
          onClick={() => handleClick(Number(page) - 1)}
        >
          prev
        </button>
        {Array(totalPage)
          .fill(null)
          .map((_, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <button type="button" key={i} onClick={() => handleClick(i + 1)}>
              {i + 1}
            </button>
          ))}
        <button
          type="button"
          disabled={page >= `${totalPage}`}
          onClick={() => handleClick(Number(page) + 1)}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default SalesList;
