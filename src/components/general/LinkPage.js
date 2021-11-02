import './LinkPage.css'
import './../../App.css'

function LinkPage(props) {
    return (
        <div className='header__link-page'>
            <div className='container'>
                <h1 className='header__title'>{props.title}</h1>
                <div className='header__link'>
                    <span className='header__link-active'>Home</span>
                    <i className="fas fa-angle-right header__link-icon"></i>
                    <span className='header__link-none'>{props.link}</span>
                </div>
            </div>
        </div>
    );
}

export default LinkPage;
