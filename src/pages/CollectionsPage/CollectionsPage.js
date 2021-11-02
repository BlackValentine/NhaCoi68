import CollectionsContainer from './../../containers/CollectionsContainer';
import LinkPage from '../../components/general/LinkPage';
import './../../App.css'

function CollectionsPage() {
    return (
        <div className='page'>
            <LinkPage
                title={'Collections'}
                link={'Collections'}
            />

            <CollectionsContainer />
        </div>
    );
}

export default CollectionsPage;
