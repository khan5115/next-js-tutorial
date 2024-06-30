import Link from "next/link";

const Userlist = () => {
    const users = [
        {
            id: 1,
            name: "user1"
        },
        {
            id: 2,
            name: "user2"
        },
        {
            id: 3,
            name: "user3"
        }
    ];
    return (
        <div className="user-list">
            {
                users.length && users.map((item, index) => {
                    return (
                        <div className="user">
                            <Link href={`/userlist/${item.name}`}>{item.name}</Link>
                        </div>
                    );
                })
            }
        </div>
    );
}
export default Userlist;