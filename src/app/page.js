import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="main-content"><h1>Home Page</h1></div>
      <div className="user-list">
        <Link href="/userlist">Users List</Link>
      </div>
    </main>
  );
}
