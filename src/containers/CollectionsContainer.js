import { connect } from 'react-redux'
import CollectionsItem from '../components/collections/CollectionItem';
import CollectionsList from '../components/collections/CollectionsList';

function CollectionsContainer(props) {
    var { collections } = props;
    console.log(collections)

    var showCollections = (collections) => {
        var result = null;
        result = collections.map((collection, index) => {
            return <CollectionsItem
                key={index}
                collection={collection}
            />
        })
        return result
    }

    return (
        <CollectionsList>
            {showCollections(collections)}
        </CollectionsList>
    )
}

const mapStateToProps = state => {
    return {
        collections: state.collections
    }
}

export default connect(mapStateToProps, null)(CollectionsContainer);