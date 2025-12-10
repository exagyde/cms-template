import "./Header.css";

import { getComponentBySlug } from "@/lib/content";

export default async function Header() {
    const slugs = ["header"];
    const page = await getComponentBySlug(slugs[0]);

    return (
        <header>
            <div dangerouslySetInnerHTML={{ __html: page.content }} />
            <nav>
                <a href="/">Accueil</a>
            </nav>
        </header>
    );
}