'use client'
import { SessionProvider } from 'next-auth/react'
import { store, persistor } from '../store/Store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
const ProviderStore = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <SessionProvider>{children}</SessionProvider>
      </Provider></PersistGate>
    </div>
  )
}

export default ProviderStore
