import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";
import icon from "../assets/icon.png";
import Loading from "../Loading/Loading";

const Talent = () => {
  const {
    data: users,
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/users");
      const data = await res.json();
      return data;
    },
  });

  const handleVerifiedUser = (id) => {
    fetch(`http://localhost:5000/users/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ verify: true }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Account Verified Successed");
          refetch();
        }
      });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="overflow-x-auto">
      <div className="flex justify-between items-center mb-5">
        <input
          type="text"
          placeholder="Search by email"
          className="input focus:outline-none input-bordered w-full max-w-xs"
        />
        <select className="select focus:outline-none select-bordered w-32">
          <option disabled selected>
            Sort By
          </option>
          <option value="verify">Verified</option>
        </select>
      </div>
      <table className="table table-zebra w-full">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, index) => (
            <tr key={user._id}>
              <th>{index + 1}</th>
              <td>
                {user.fname} {user.lname}
              </td>
              <td>{user.email}</td>
              <td>{user.value}</td>
              <td>
                <button onClick={() => handleVerifiedUser(user._id)}>
                  {user.verify ? (
                    <>
                      <img src={icon} alt="" />
                    </>
                  ) : (
                    "UnVerified"
                  )}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Talent;
