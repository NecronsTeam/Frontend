import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Store from './store/store.ts'
import $api from './http/index.ts'

interface State {
  store: Store
}

const store = new Store();
export const Context = createContext<State>({
  store
});

const response = await $api.post('/auth/login?username=ЖОПА');
console.log(response.data);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Context.Provider value={{
      store
    }}>
      <App />      
    </Context.Provider>
  </StrictMode>,
)
