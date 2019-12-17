import React from "react";

const CommentDetail = ({ img, name, date, comment }) => {
	return (
		<div className="comment">
			<a href="/" className="avatar">
				<img alt="avatar" src={img} />
			</a>
			<div className="content">
				<a href="/" className="author">
					{name}
				</a>
				<div className="metadata">
					<span className="date">Today at {date.toString()}</span>
				</div>
				<div className="text">{comment}</div>
			</div>
		</div>
	);
};

export default CommentDetail;
