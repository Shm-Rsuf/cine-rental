import MovieList from "./cine/MovieList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import { MovieContext } from "./context";

export default function App() {
  return (
    <>
      <MovieContext.Provider>
        <Header />
        <main>
          <div className='container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]'>
            <SideBar />
            <MovieList />
          </div>
        </main>
        <Footer />
      </MovieContext.Provider>
    </>
  );
}
