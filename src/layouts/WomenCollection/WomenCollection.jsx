
import CollectionContainer from "../../components/CollectionContainer/CollectionContainer";
import FetchDataHOC from "../../components/FetchDataHOC/FetchDataHOC";

const WomenCollection = ({ data }) => {
    return (
        <CollectionContainer collection = {data} collectionTitle="Women"/>
    );
}
export default FetchDataHOC(
    WomenCollection, 
    "http://127.0.0.1:8000/api/women-collection"
    );