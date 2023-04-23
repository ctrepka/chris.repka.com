import * as fs from "fs";
import path from "path";
import crypto from "crypto";
import { redirect } from "@sveltejs/kit";

import { config } from "../../../lib/config"

export const prerender = false;

export const actions = {
    create: async ({ cookies, request }) => {
        const uuid = crypto.randomUUID();
        const data = await request.formData();
        var object = {};

        data.forEach((value, key) => object[key] = value);
        data["uuid"] = String(uuid);

        var json = JSON.stringify(object);

        if (!fs.existsSync(config.content.types.blog.writeDir)) {
            fs.mkdirSync(config.content.types.blog.writeDir)
        }

        fs.writeFile(
            config.content.types.blog.writeDir + "/" + uuid + ".json",
            json,
            {},
            () => {
                console.log(`post created ${uuid} successfully at ${config.content.types.blog.writeDir}/${uuid}`)
            }
        )

        throw redirect(303, `/blog/${uuid}`)
    },
};