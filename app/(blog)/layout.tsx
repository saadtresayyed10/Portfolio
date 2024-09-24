import Footer from "../(home)/_components/Footer";
import Navbar from "./_components/Navbar";

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <header className="sticky z-50 top-0">
        <Navbar />
      </header>
      <main>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default BlogLayout;
