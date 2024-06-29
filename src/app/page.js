"use client";
import Image from "next/image";
import Link from "next/link";
import "./page.scss";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const customNavigate = (route) => {
    router.push(route);
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="menu-list">
        <div>
          <Link href="/login">Login Page</Link>
        </div>
        <div>
          <Link href="/about">About Page</Link>
        </div>
        <div>
          <button onClick={() => customNavigate("/login")}>Go to login Page.</button>
        </div>
        <div>
          <button onClick={() => customNavigate("/about")}>Go to about Page.</button>
        </div>
      </div>
    </main>
  );
}
