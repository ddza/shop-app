
import CollectionContainer from "../../components/CollectionContainer/CollectionContainer";
import FetchDataHOC from "../../components/FetchDataHOC/FetchDataHOC";

const MenCollection = ({ data }) => {
    return (
        <CollectionContainer collection = {data} collectionTitle="Men"/>
    );
}
export default FetchDataHOC(
    MenCollection,
    "http://127.0.0.1:8000/api/men-collection"
    );