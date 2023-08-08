
import { useLazyGetUserQuery, userApi } from '../store/api/userApi';
import { useDispatch } from 'react-redux';
import { setName, setToken } from '../store/slices/userSlice';
import { Layout1 } from '../layouts/Layout1';


export const Component1 = () => {

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
        <Layout1>
            <h2>Component1</h2>
            <div>
                <button onClick={handleLogin}>Fetch Users</button>
            </div>
            <div style={{ marginTop: "1.5rem" }}>
                <button onClick={() => { userApi.util.resetApiState() }}>Reset Api State Cache</button>
            </div>
        </Layout1>
    )
}