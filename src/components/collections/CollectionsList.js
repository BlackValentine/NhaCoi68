import './../../App.css'
import './Collections.css'

function CollectionsList(props) {
    return (
        <div className='section collections container grid'>
            <ul className='collections__list'>
                {props.children}
            </ul>
        </div>
    );
}

export default CollectionsList;
