import Columns from '../columns/Columns';

function SingleBoard() {
  return (
    <div className="bg-amber-50 pt-5">
      <div className="font-chalk mx-100 border-30 border-[#A97948] bg-neutral-700 pb-10">
        <p className="mb-5 py-6 text-center text-3xl font-bold text-white">
          The Drag n Drop Board
        </p>
        <Columns />
      </div>
    </div>
  );
}

export default SingleBoard;
