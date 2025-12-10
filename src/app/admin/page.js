"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AdminPage() {
    const router = useRouter();
    useEffect(() => {
        router.replace("/admin/index.html");
    }, [router]);
    return <p>Loading...</p>;
}