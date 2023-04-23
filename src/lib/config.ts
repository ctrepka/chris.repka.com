// importing directly as recommended here:
// https://github.com/bytedance/bytemd/issues/269
import gfm from '@bytemd/plugin-gfm';
import mermaid from '@bytemd/plugin-mermaid';

export const config = {
    content: {
        types: {
            "blog": {
                "writeDir": "./static/blogs"
            }
        }
    },
    bytemdConfig: {
        plugins: [
            gfm(),
            mermaid()
        ]
    }
}