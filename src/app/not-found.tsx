'use client';

import NotFoundComponent from "@/components/not-found/NotFound";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Seite nicht gefunden – Buildeo",
    description: "Die von Ihnen gesuchte Seite existiert nicht oder wurde verschoben. Finden Sie Ihre gewünschten Informationen über die Navigation oder unsere Startseite.",
    robots: "noindex, nofollow"
};

export default function NotFound() {
    return (
        <NotFoundComponent />
    );
}
