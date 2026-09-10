import Columns from '../columns/Columns';

function SingleBoard() {
  return (
    <div className="font-chalk min-h-screen bg-neutral-700">
      <p className="mb-5 py-6 text-center text-3xl font-bold text-white">
        The Drag n Drop Board
      </p>
      <Columns />
    </div>
  );
}

export default SingleBoard;
