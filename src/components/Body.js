import Link from "next/link";

const Body = (props) => {
  const { products } = props;
  return (
    <div className="container mx-auto my-10">
      <div className="grid grid-cols-3 gap-4 gap-y-6 place-items-center">
        {products.map((product, index) => {
          return (
            <Link href={`products/${product.id}`}>
              <div
                key={index}
                className="card bg-base-100 w-96 shadow-xl h-[500px]"
              >
                <figure>
                  <img src={product.image} alt="product" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{product.title}</h2>
                  <p className="overflow-hidden h-12">{product.description}</p>
                  <div className="card-actions justify-end">
                    <div className="badge badge-outline">
                      {product.category}
                    </div>
                    <div className="badge badge-outline">{product.price}</div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
