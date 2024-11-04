import { useState } from "react";

const ShowUserInput = () => {
	const [userName, setUserName] = useState("");

	return (
		<div className="wrapper">
			<div className="container">
				<form action="#">
					<div className="input-field">
						<label htmlFor="userName">Enter your name: </label>
						<input
							type="text"
							name="userName"
							id="userName"
							value={userName}
							onChange={(e) => setUserName(e.target.value)}
						/>
					</div>
				</form>
				<div className="showInput">
					<p>
						User name is: <span>{userName}</span>
					</p>
				</div>
			</div>
		</div>
	);
};
export default ShowUserInput;
