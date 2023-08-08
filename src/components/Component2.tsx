
import { useLazyGetUserQuery, userApi } from '../store/api/userApi';
import { useDispatch } from 'react-redux';
import { setName, setToken } from '../store/slices/userSlice';
import { Layout2 } from '../layouts/Layout2';


export const Component2 = () => {

    const dispatch = useDispatch();
    const [getUsers, {}] = useLazyGetUserQuery();

    const handleLogin = async () => {

        dispatch(setName("Foisal"));
        dispatch(setToken("usba"));

        getUsers("").then(({data}) => {
            console.log(data)
        });
    }

    const handleClear = () => {
        console.log("Clearing cache from component 2.")
        userApi.util.resetApiState()
    }

    return (
        <Layout2>
            <h2>Component2</h2>
            <div>
                <button onClick={handleLogin}>Fetch Users</button>
            </div>
            <div style={{ marginTop: "1.5rem" }}>
                <button onClick={handleClear}>Reset Api State Cache</button>
            </div>
        </Layout2>
    )
}