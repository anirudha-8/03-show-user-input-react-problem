import { useState } from "react";

const ShowUserInput = () => {
	const [userName, setUserName] = useState("");

	return (
		<div className="container">
			<form action="#">
				<label htmlFor="userName">Enter your name: </label>
				<input
					type="text"
					name="userName"
					id="userName"
					value={userName}
					onChange={(e) => setUserName(e.target.value)}
				/>
			</form>
			<div className="showInput">
				<p>User name is: {userName}</p>
			</div>
		</div>
	);
};
export default ShowUserInput;
