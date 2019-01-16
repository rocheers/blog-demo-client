import React from 'react';

const UserAside = ({ profileImageUrl, username }) => {
    return (
        <aside className="col-sm-2">
            <div className="panel panel-default">
                <div className="panel-body">
                    <img src={profileImageUrl} alt={username} className="img-thumbnail" width="200" height="200" />
                </div>
            </div>
        </aside>
    );
};

export default UserAside;
