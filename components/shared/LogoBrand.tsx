import Image from "next/image";
import Link from "next/link";
import React from "react";

const LogoBrand = () => {
  return (
    <Link className="flex items-center justify-center " href="/">
      <Image
        src="/graphixforge-logo.png"
        alt="GraphixForge Logo"
        width={32}
        height={32}
      />
      <span className="ml-2 text-2xl font-bold">GraphixForge</span>
    </Link>
  );
};

export default LogoBrand;
