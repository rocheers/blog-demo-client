import React from 'react';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';

export default ({ date, profileImageUrl, text, username, removeMessage, isCorrectUser }) => {
    return (
        <div>
            <li className="list-group-item">
                {profileImageUrl ? (
                    <img src={profileImageUrl} alt={username} height="100" width="100" className="timeline-image" />
                ) : (
                    <i class="fa fa-user-circle fa-3x timeline-image" aria-hidden="true" />
                )}
                <div className="message-area">
                    <Link to="/">@{username} &nbsp;</Link>
                    <span className="text-muted">
                        <Moment className="text-muted" format="Do MMM YYYY">
                            {date}
                        </Moment>
                    </span>
                    <p>{text}</p>
                    {isCorrectUser && (
                        <a className="btn btn-danger" onClick={removeMessage}>
                            Delete
                        </a>
                    )}
                </div>
            </li>
        </div>
    );
};
