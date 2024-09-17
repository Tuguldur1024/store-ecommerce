import { notFound } from "next/navigation";
import Navbar from "../components/Navbar";
import Body from "../components/Body";
import Footer from "../components/Footer";

const Home = (props) => {
  const { products } = props;
  console.log(products);
  return (
    <div className="container mx-auto">
      <Navbar />
      <Body products={products} />
      <Footer />
    </div>
  );
};

export default Home;

export const getServerSideProps = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    return {
      props: {
        products: data,
      },
    };
  } catch (error) {
    return {
      notFound: true,
    };
  }
};
