// import '../stylesheets/_app.scss';
import Wrapper from './Wrapper'

function App() {
  return (
    <div className="App">
      <Wrapper size={{ medium: 'wrapper m' }}></Wrapper>
      <Wrapper size={{ large: 'wrapper l' }}></Wrapper>
      <Wrapper size={{ small: 'wrapper s' }}></Wrapper>


    </div>
  );
}

export default App;
