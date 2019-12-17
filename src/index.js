import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
	return (
		<div className="ui container comments">
			<CommentDetail
				img={faker.image.avatar()}
				name={faker.name.firstName()}
				date={faker.date.past()}
				comment={faker.lorem.sentence()}
			/>
			<CommentDetail
				img={faker.image.avatar()}
				name={faker.name.firstName()}
				date={faker.date.past()}
				comment={faker.lorem.sentence()}
			/>
			<CommentDetail
				img={faker.image.avatar()}
				name={faker.name.firstName()}
				date={faker.date.past()}
				comment={faker.lorem.sentence()}
			/>
			<CommentDetail
				img={faker.image.avatar()}
				name={faker.name.firstName()}
				date={faker.date.past()}
				comment={faker.lorem.sentence()}
			/>
			<ApprovalCard>
				<CommentDetail
					img={faker.image.avatar()}
					name={faker.name.firstName()}
					date={faker.date.past()}
					comment={faker.lorem.sentence()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					img={faker.image.avatar()}
					name={faker.name.firstName()}
					date={faker.date.past()}
					comment={faker.lorem.sentence()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<CommentDetail
					img={faker.image.avatar()}
					name={faker.name.firstName()}
					date={faker.date.past()}
					comment={faker.lorem.sentence()}
				/>
			</ApprovalCard>
			<ApprovalCard>
				<div>
					<h4>Warning!</h4>
					Are you sure you want to do this?
				</div>
			</ApprovalCard>
		</div>
	);
};

ReactDOM.render(<App />, document.querySelector("#root"));
