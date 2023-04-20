import { marked } from "marked";

const toMarkedOptions = (options) => {
    return {
        gfm: options.gfm ?? true,
    }
}

export function convert(markdown, options) {
    return marked.parse(markdown, toMarkedOptions(options))
}