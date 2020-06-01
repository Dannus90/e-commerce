import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview";
import CollectionPage from "../collection/collection.component";

//LOOK HERE FOR THE NEXT PAGE.

const ShopPage = ({ match }) => {
    console.log(match);
    return (
        <div className="shop-page">
            <Route
                exact
                path={`${match.path}`}
                component={CollectionsOverview}
            />
            <Route
                path={`${match.path}/:collectionId`}
                component={CollectionPage}
            />
        </div>
    );
};

export default ShopPage;
