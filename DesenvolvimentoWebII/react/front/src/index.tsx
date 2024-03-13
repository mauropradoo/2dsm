import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App /> // me retorna um xml, só pode escrever isso dentro de um arquivo tsx
);
