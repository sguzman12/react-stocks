import { configureStore } from "@reduxjs/toolkit";
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from "@reduxjs/toolkit/query";
import { stocksApi } from "../api/api";
import { pokemonApi } from "../api/pokemon";

const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [stocksApi.reducerPath]: stocksApi.reducer,
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(stocksApi.middleware)
      .concat(pokemonApi.middleware),
});

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);

store.subscribe(() => {
  window.sessionStorage.setItem("reduxState", JSON.stringify(store.getState()));
});

export default store;
