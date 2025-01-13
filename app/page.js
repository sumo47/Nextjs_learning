'use client' // now this component become client component
// although it runs on both server and client

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  console.log("Running next js app")
  return (
    <>
      <h1>All Services</h1>
      <Link href="/about">About</Link>  <Link href="/services">Services</Link>
    </>
  );
}
