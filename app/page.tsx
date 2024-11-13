import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

export default function Home() {
  return (
    <div>
      <nav>
        <Header />
      </nav>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow">
          <Main />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}