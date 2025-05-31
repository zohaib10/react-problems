import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-dvh bg-gray-800">
      <Link
        href="/lesson/1"
        className="border p-4 rounded-sm bg-pink-600 border-pink-600"
      >
        Counter Component
      </Link>
    </div>
  );
}
