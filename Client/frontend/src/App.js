import './App.css';
import Login from './Login'
import Register from './Register'

function App() {
  return (
    <div className="App">
      <table>
        <tbody>
          <tr>
            <td colSpan={2}><h1 className='mainTitle'>WELCOME</h1></td>
          </tr>
          <tr>
            <td><Login /></td>
            <td><Register /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
