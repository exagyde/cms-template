import "./style.css"

import { getPageBySlug } from "@/lib/content";

export default async function HomePage() {
    const slugs = ["accueil"];
    const page = await getPageBySlug(slugs[0]);

    return (
        <div id="home">
            <video src="/uploads/background.mp4" autoPlay loop muted playsInline></video>
            <div>
                <h1>{page.meta.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: page.content }} />
                <a href="https://github.com/exagyde/cms-template" className="cta">Commencer</a>
            </div>
        </div>
    );
}
