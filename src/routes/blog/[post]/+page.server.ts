import * as fs from "fs";
import { config } from "../../../lib/config";
import type { Blog } from "../blog";

/** @type {import("./$types").PageServerLoad} */
export async function load({ params }): Promise<{ blog: Blog }> {
    const post = fs.readFileSync(config.content.types.blog.writeDir + "/" + params.post + ".json", {
        encoding: "utf-8",
    });

    let blog = JSON.parse(post)

    return {
        blog
    }
}