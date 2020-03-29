import React from "react";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCollectionsStartsAsync } from "../../redux/shop/shop.actions";

import CollectionsOverviewContainers from "../../components/collections-overview/collection-overview.container";
import CollectionPageContainer from "../collection/collection.container";

class ShopPage extends React.Component {
	componentDidMount() {
		const { fetchCollectionsStartsAsync } = this.props;
		fetchCollectionsStartsAsync();
	}

	render() {
		const { match } = this.props;
		return (
			<div className="shop-page">
				<Route
					exact
					path={`${match.path}`}
					component={CollectionsOverviewContainers}
				/>
				<Route
					path={`${match.path}/:collectionId`}
					component={CollectionPageContainer}
				/>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	fetchCollectionsStartsAsync: () => dispatch(fetchCollectionsStartsAsync())
});

export default connect(null, mapDispatchToProps)(ShopPage);
