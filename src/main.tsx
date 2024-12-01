import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import Store from './store/store.ts'
import $api from './http/index.ts'
import { validateValue } from './validation/index.ts'
import { minLength } from './validation/validators/minLength.ts'

interface State {
  store: Store
}

const store = new Store();
export const Context = createContext<State>({
  store
});


const value = '123456';
const res = await validateValue(value, [minLength(7)]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Context.Provider value={{
      store
    }}>
      <App />      
    </Context.Provider>
  </StrictMode>,
)
