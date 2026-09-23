import { computed } from 'vue';
import { marked } from 'marked';

export const useMarkdown = (text: string) => {
    return computed(() => marked.parse(text));
}
