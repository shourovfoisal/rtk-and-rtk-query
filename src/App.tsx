import { useDispatch } from 'react-redux';
import './App.css'
import { useLazyGetUserQuery, userApi } from './store/api/userApi';
import { setName, setToken } from './store/slices/userSlice';

function App() {
  const dispatch = useDispatch();
  const [getUsers, {}] = useLazyGetUserQuery();

  const handleLogin = async () => {

    dispatch(setName("Shourov"));
    dispatch(setToken("astra"));

    getUsers("").then(({data}) => {
      console.log(data)
    });
  }

  return (
    <div className='card' style={{ backgroundColor: "#ddd" }}>
      <div>
        <button onClick={() => { userApi.util.resetApiState() }}>Reset Api State Cache</button>
      </div>
      <div style={{ marginTop: "1.5rem" }}>
        <button onClick={handleLogin}>Fetch Users</button>
      </div>
    </div>
  )
}

export default App
