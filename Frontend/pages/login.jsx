import { useRef } from "react";
import { GlobalContext } from "../context";
import Router from "next/router";
import axios from "axios";
function login() {
	const { user, setUser } = GlobalContext();
	const regnoContainer = useRef(null);
	const handleSubmit = async (e) => {
		try {
			e.preventDefault();
			const res = await axios.get(`http://localhost:3002/student/${regnoContainer.current.value}`);
			const { success, message, data } = res.data;
			if (success) {
				setUser(data);
				console.log(message);
				Router.push("/home");
			} else {
				alert(message);
			}
		} catch (e) {
			console.log(e);
		}
	};
	return (
		<form>
			<input type="text" placeholder="Reg No." ref={regnoContainer} />
			<input type="password" placeholder="Password" />
			<button onClick={handleSubmit}> Login</button>
		</form>
	);
}
export default login;
