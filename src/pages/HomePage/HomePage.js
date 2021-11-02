import './../../App.css';
import './../../components/home/Home.css'
import Review from './../../components/home/Review';
import Policy from './../../components/home/Policy';
import Subscribe from './../../components/home/Subscribe';
import Categories from './../../components/home/Categories';
import Trending from './../../components/home/Trending';

function HomePage() {
    return (
        <div>
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
        </div>
    );
}

export default HomePage;
