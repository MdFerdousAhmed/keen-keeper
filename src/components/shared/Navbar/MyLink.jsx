"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MyLink = ({ href, children }) => {
  const pathname = usePathname();

  const isActive =
    href === "/"
      ? pathname === "/"
      : pathname?.startsWith(href);

  return (
    <div>
      <Link
        href={href}
        className={`font-semibold ${
          isActive ? "bg-[#244D3F] rounded-md p-2 text-white" : ""
        }`}
      >
        {children}
      </Link>
    </div>
  );
};

export default MyLink;