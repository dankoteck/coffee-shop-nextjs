import CategoryNavigation from "~/app/components/CategoryNavigation";
import SearchInput from "~/app/components/SearchInput";
import Products from "~/static/json/products";
import ProductCard from "./components/ProductCard";

export default function Page() {
  // TODO: replace it with a real data from the API that would be nice.
  const espressoProducts = Products.filter(
    (product) => product.category === "Espresso"
  );

  const teaProducts = Products.filter((product) => product.category === "Tea");

  const coffeeProducts = Products.filter(
    (product) => product.category === "Coffee"
  );

  const frappuccinoProducts = Products.filter(
    (product) => product.category === "Frappuccino"
  );

  return (
    <section className="l-container p-[30px]">
      <header className="space-y-7 mb-6">
        <h1 className="text-white font-semibold text-[28px] leading-9">
          Find the best <br className="block xs:hidden" />
          coffee for you
        </h1>

        <SearchInput placeholder="Find Your Coffee..." />

        <CategoryNavigation />
      </header>

      <main className="flex flex-col gap-6">
        <div className="flex flex-col gap-5 overflow-x-auto scrollbar w-overflow">
          <p className="font-medium text-base leading-5 text-white">Espresso</p>
          <div className="flex gap-5">
            {espressoProducts.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 overflow-x-auto scrollbar w-overflow">
          <p className="font-medium text-base leading-5 text-white">Tea</p>
          <div className="flex gap-5">
            {teaProducts.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 overflow-x-auto scrollbar w-overflow">
          <p className="font-medium text-base leading-5 text-white">Coffee</p>
          <div className="flex gap-5">
            {coffeeProducts.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-5 overflow-x-auto scrollbar w-overflow">
          <p className="font-medium text-base leading-5 text-white">
            Frappuccino
          </p>
          <div className="flex gap-5">
            {frappuccinoProducts.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </main>
    </section>
  );
}
