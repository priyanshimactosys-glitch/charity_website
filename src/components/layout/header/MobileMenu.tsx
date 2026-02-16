"use client";

import { menuItems } from "./menuData";
import Link from "next/link";

export default function MobileMenu({
  open,
}: {
  open: boolean;
}) {
  if (!open) return null;

  return (
    <div className="lg:hidden bg-white shadow-md p-6">
      {menuItems.map((item, index) => (
        <div key={index} className="mb-4">
          <p className="font-semibold">{item.label}</p>

          {item.children?.map((child, i) => (
            <Link
              key={i}
              href={child.href}
              className="block ml-4 text-sm py-1"
            >
              {child.label}
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
}
