import "./Footer.css";

import { getComponentBySlug } from "@/lib/content";

export default async function Footer() {
    const slugs = ["footer"];
    const page = await getComponentBySlug(slugs[0]);

    return (
        <footer>
            <div dangerouslySetInnerHTML={{ __html: page.content }} />
        </footer>
    );
}