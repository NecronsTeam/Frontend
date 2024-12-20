import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import $api from './http/index.ts'
import { validateValue } from './validation/index.ts'
import { minLength } from './validation/validators/minLength.ts'
import { Store } from './store/store.ts'
import { store } from './store/store.ts';
interface State {
  store: Store
}

export const StoreContext = createContext<State>({
  store
});


const value = '123456';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StoreContext.Provider value={{
      store
    }}>
      <App />      
    </StoreContext.Provider>
  </StrictMode>,
)
