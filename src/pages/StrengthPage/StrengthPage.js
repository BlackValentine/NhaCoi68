import Footer from '../../components/general/Footer'
import LinkPage from '../../components/general/LinkPage';
import './../../App.css'


function StrengthPage() {
    return (
        <div className='page'>
            <LinkPage
                title={'Strength'}
                link={'Strength'}
            />
            <h2>Đây là điểm mạnh</h2>
        </div>
    );
}

export default StrengthPage;
