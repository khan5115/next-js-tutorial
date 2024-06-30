"use client";
const User = ({params}) => {
  console.log('params', params);
  return (
    <div className="user-detail">
        <h3>User name: {params.user}</h3>
    </div>
  );
}
export default User;