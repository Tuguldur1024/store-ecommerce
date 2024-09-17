import { useRouter } from "next/router";
import useSWR from "swr";
import Navbar from "../../components/Navbar";
import Footer from "@/components/Footer";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const Product = () => {
  const router = useRouter();
  const productId = router.query.product;
  const url = `https://fakestoreapi.com/products/${productId}`;
  const { data, error, isLoading } = useSWR(url, fetcher);
  if (error) return <div> ...error </div>;
  if (isLoading) return <div> ...isLoading </div>;
  console.log(data);
  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="card lg:card-side bg-base-100 shadow-xl my-10">
        <div className="w-[700px] py-10">
          <img className=" w-[300px] mx-auto" src={data.image} alt="Album" />
        </div>

        <div className="card-body bg-gray-100 max-w-[840px] ">
          <h2 className="card-title">{data.title}</h2>
          <p>{data.description}</p>
          <div className="flex">
            <p>${data.price} </p>
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Add Card</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
