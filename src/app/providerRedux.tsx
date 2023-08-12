"use client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { persister, store } from "@/store";

const ProviderRedux = ({ children }: { children: React.ReactNode }) => {
	return (
		// PROVIDER REDUX WITH PERSISTGATE AND APOLLO PROVIDER AND CLIENT WITH GRAPHQL
		<Provider store={store}>
			<PersistGate loading={false} persistor={persister}>
				{/* CHILDREN COMPONENTS  */}
				{children}
			</PersistGate>
		</Provider>
	);
};

export default ProviderRedux;
