import Link from "next/link";

type LinkButtonProps = {
  href: string;
  title: string;
};

const LinkButton = ({ href, title }: LinkButtonProps) => (
  <Link
    href={href}
    className="border p-4 rounded-sm bg-pink-600 border-pink-600 w-[200px] text-center m-2"
  >
    {title}
  </Link>
);

export default function Home() {
  return (
    <div className="flex justify-center items-center h-dvh bg-gray-800">
      <div className="flex flex-wrap justify-around w-[80%]">
        <LinkButton href="/problem/1" title="Counter Component" />
        <LinkButton href="/problem/2" title="Visibility Toggle" />
        <LinkButton href="/problem/3" title="Todo List" />
        <LinkButton href="/problem/4" title="Tabs" />
        <LinkButton href="/problem/5" title="Display Users" />
      </div>
    </div>
  );
}
