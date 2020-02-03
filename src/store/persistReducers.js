import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'portfolioReact',
      storage,
      whitelist: ['auth', 'user', 'project'],
    },
    reducers
  );

  return persistedReducer;
};
