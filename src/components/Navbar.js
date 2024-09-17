import useSWR from "swr";

const url = "https://fakestoreapi.com/products/categories";
const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Navbar = () => {
  const { data, error, isLoading } = useSWR(url, fetcher);
  if (error) return <div> ...error </div>;
  if (isLoading) return <div> ...Loading </div>;
  console.log(data);
  return (
    <div className="navbar bg-base-100 flex items-center p-2">
      <div className="flex-1 flex items-center">
        <a className="btn bt text-2xl mr-6 font-bold"> Store </a>
        <div className="flex gap-6">
          {data.map((category, index) => {
            return (
              <a key={index} className="btn btn-ghost text-xl">
                {category}
              </a>
            );
          })}
        </div>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
