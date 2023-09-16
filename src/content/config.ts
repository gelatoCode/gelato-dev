import { z, defineCollection } from 'astro:content';

const post = defineCollection ({
  type: 'content',
  schema : z.object({
    title: z.string(),
    desc : z.string(),
    pubDate : z.string().or(z.date()).transform((str) => new Date(str)),
    draft : z.boolean().default(false)
  }),
});

export const collections = {
  post : post
}