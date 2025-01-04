import React from "react";
import { Link } from "react-router-dom";
const UserCard = ({ user, useSkeleton }) => {
  return (
    <div>
      {useSkeleton ? (
        <div className="flex flex-wrap mt-5 justify-center w-52 flex-col gap-4">
          <div className="skeleton h-32 w-80"></div>
          <div className="skeleton h-4 w-28"></div>
          <div className="skeleton h-4 w-full"></div>
          <div className="skeleton h-4 w-full"></div>
        </div>
      ) : (
        <div className="card bg-base-100 w-80 shadow-xl border">
          <div className="card-body">
            <h2 className="card-title">{user?.name}</h2>
            <span className="text-sm text-gray-500">{user.email}</span>
            <div>
              <p className="text-sm">
                <span className="font-bold">Company: </span>
                {user.company.name}
              </p>
              <p className="text-sm">
                <span className="font-bold">Website: </span>
                {user.website}
              </p>
            </div>
            <div className="card-actions justify-end mt-3">
              <Link to={`/details/${user.id}`} className="btn btn-primary">
                View details
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserCard;
