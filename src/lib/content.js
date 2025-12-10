import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const contentPagesDir = path.join(process.cwd(), "content", "pages");
const contentComponentsDir = path.join(process.cwd(), "content", "components");

export async function getPageBySlug(slug) {
    try {
        const filePath = path.join(contentPagesDir, `${slug}.md`);
        if (!fs.existsSync(filePath)) {
            return { meta: { title: "Page not found" }, content: "<p>This page doesn't exist.</p>" };
        }

        const fileContent = fs.readFileSync(filePath, "utf8");
        const { data, content } = matter(fileContent);
        const processed = await remark().use(html).process(content);

        return { meta: data, content: processed.toString() };
    } catch (err) {
        console.error(`Erreur lecture page ${slug}:`, err);
        return { meta: { title: "Error" }, content: "<p>This page couldn't be loaded.</p>" };
    }
}

export async function getComponentBySlug(slug) {
    try {
        const filePath = path.join(contentComponentsDir, `${slug}.md`);
        if (!fs.existsSync(filePath)) {
            return { meta: { title: "Component not found" }, content: "<p>This component doesn't exist.</p>" };
        }

        const fileContent = fs.readFileSync(filePath, "utf8");
        const { data, content } = matter(fileContent);
        const processed = await remark().use(html).process(content);

        return { meta: data, content: processed.toString() };
    } catch (err) {
        console.error(`Erreur lecture page ${slug}:`, err);
        return { meta: { title: "Error" }, content: "<p>This component couldn't be loaded.</p>" };
    }
}

export function getAllSlugs() {
    if (!fs.existsSync(contentDir)) return [];
    return fs.readdirSync(contentDir).map(f => f.replace(/\.md$/, ""));
}
