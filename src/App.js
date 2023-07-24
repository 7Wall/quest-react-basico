import './App.css';
import TextTransform from './text-transform/text-transform.js';
import Button from './button/button.js'

function App() {
  return (
    <>
      <TextTransform color='#00f0f0' content='esse texto não é todo maiusculo'/>

      <Button label='Label digitada na props'/>
    </>
  );
}

export default App;