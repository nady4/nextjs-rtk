"use client";
import { decrement, increment, reset } from "@/redux/features/counterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useGetUsersQuery } from "@/redux/services/userApi";

function Home() {
  const count = useAppSelector((state) => state.counterReducer.value);
  const dispatch = useAppDispatch();

  const { isLoading, isFetching, data, error } = useGetUsersQuery(null);

  if (isLoading || isFetching)
    return <p className="text-center text-gray-500">Loading...</p>;

  if (error)
    return (
      <p className="text-center text-red-500 font-semibold">
        Something went wrong!
      </p>
    );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Counter Section */}
      <div className="bg-white p-6 rounded-xl shadow-lg text-center w-full max-w-sm">
        <h4 className="text-2xl font-bold text-gray-800 mb-4">{count}</h4>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => dispatch(decrement())}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Decrement
          </button>
          <button
            onClick={() => dispatch(increment())}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(reset())}
            className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
          >
            Reset
          </button>
        </div>
      </div>

      {/* User List Section */}
      <div className="mt-10 w-full max-w-4xl">
        {error ? (
          <p className="text-center text-red-500 font-semibold">
            Some error occurred
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {data?.map((user) => (
              <div
                key={user.id}
                className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center"
              >
                <p className="text-lg font-semibold text-gray-800">
                  {user.name}
                </p>
                <p className="text-gray-500">@{user.username}</p>
                <p className="text-sm text-gray-600">{user.email}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
