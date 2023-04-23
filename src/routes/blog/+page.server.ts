import * as fs from "fs";
import { config } from "../../lib/config";
import type { Blog } from "./blog";

/** @type {import("./$types").PageServerLoad} */
export async function load(): Promise<{ blogs: Blog[] }> {
    const postsPaths = fs.readdirSync(config.content.types.blog.writeDir, {
        "encoding": "utf-8"
    })

    let blogs: Blog[] = postsPaths.map(p => {
        const post = fs.readFileSync(config.content.types.blog.writeDir + "/" + p, {
            encoding: "utf-8",
        });

        return { uuid: p.split(".json")[0], ...JSON.parse(post) }
    })

    return {
        blogs
    }
}