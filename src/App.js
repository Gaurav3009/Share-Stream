import './App.scss';
import Body from "./webpages/Body";
import { FileContextProvider } from './webpages/FileContext';

function App() {
  return (
    <FileContextProvider>
      <Body/>
    </FileContextProvider>
    
  );
}

export default App;
