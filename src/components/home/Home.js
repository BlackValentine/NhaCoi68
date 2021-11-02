import './../../App.css';
import './Home.css'
import Footer from './../../components/general/Footer'
import Review from './Review';
import Policy from './Policy';
import Subscribe from './Subscribe';
import Categories from './Categories';
import Header from './../general/Header'
import Trending from './Trending';

function Home() {
    return (
        <div>
            <Header />

            <main className="main" id="main">
                <section className="slider" id="slider">
                    <div className="slider__img"></div>
                </section>

                <Categories />

                <Trending />

                <Subscribe />

                <Policy />

                <Review />
            </main>

            <Footer />
        </div>
    );
}

export default Home;
