import { z, defineCollection } from 'astro:content';

const postFeed = defineCollection({
    type : 'content',
    schema : z.object({
        title : z.string(),
        pubDate : z.string().or(z.date()).transform((str) => new Date(str)),
        upDated : z.string().optional().transform((str) => (str ? new Date(str) : undefined)),
        draft : z.boolean().default(false)
    }),
});

export const collections = {
    'post' : postFeed
}