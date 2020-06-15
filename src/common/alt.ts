import { transliterate as tr, slugify } from 'transliteration';
export const alt = (caption: string, sep: string = '-'): string => {
    return (
        tr(caption)
            .toLowerCase()
            .replace(/\W/g, ' ')
            .replace(/\s+/g, sep)
    );
}
