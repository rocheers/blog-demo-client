import React from 'react';

const UserAside = ({ profileImageUrl, username }) => {
    return (
        <aside className="col-sm-2">
            <div className="panel panel-default">
                <div className="panel-body">
                    {profileImageUrl ? (
                        <img src={profileImageUrl} alt={username} className="img-thumbnail" width="200" height="200" />
                    ) : (
                        <i class="fa fa-user-circle fa-5x img-thumbnail" aria-hidden="true" />
                    )}
                </div>
            </div>
        </aside>
    );
};

export default UserAside;
