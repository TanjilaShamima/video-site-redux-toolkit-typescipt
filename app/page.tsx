import Footer from "@/src/components/Footer/Footer";
import Navbar from "@/src/components/Navbar/Navbar";
import Tags from "@/src/components/Tags/Tags";
import VideGrid from "@/src/components/grid/VideoGrid";
import Pagination from "@/src/components/ui/Pagination";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Tags />
      <VideGrid />
      <Pagination />
      <Footer />
    </main>
  );
}
