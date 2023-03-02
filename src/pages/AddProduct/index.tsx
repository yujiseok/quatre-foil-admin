const Add = () => {
  return (
    <div>
      <h4 className="border-b-2 pb-3 text-xl font-semibold">제품 추가</h4>

      <form className="mt-4">
        <div className="mb-4 flex flex-col">
          <label htmlFor="title">제품 이름</label>
          <input
            type="text"
            className="rounded border border-gray-400 p-2 focus:outline-rose-300"
            id="title"
          />
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="thumbnailBase64">제품 썸네일</label>
          <input type="file" id="thumbnailBase64" />
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="price">가격</label>
          <input
            type="text"
            className="rounded border border-gray-400 p-2 focus:outline-rose-300"
            id="price"
          />
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="description">제품 상세 설명</label>
          <textarea
            name="description"
            id="description"
            className="resize-none rounded border border-gray-400 p-2 focus:outline-rose-300"
          />
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="photoBase64">제품 상세 사진</label>
          <input type="file" id="photoBase64" />
        </div>
        <div className="mb-4 flex flex-col">
          <label htmlFor="tags">제품 태그</label>
          <input
            type="text"
            className="rounded border border-gray-400 p-2 focus:outline-rose-300"
            id="tags"
          />
        </div>

        <button
          type="submit"
          className="rounded border border-rose-300 py-2 px-4"
        >
          등록
        </button>
      </form>
    </div>
  );
};
export default Add;
