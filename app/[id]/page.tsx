import SinglePart from "@/components/products-main/single-part";
import About from "@/components/products-main/about";

export default function page() {
  return (
    <main className="container mx-auto mt-[70px]">
      <SinglePart />
      <About />
    </main>
  );
}
