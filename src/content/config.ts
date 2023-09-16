import { z, defineColection } from 'astro:content';

const daily = defineCollection ({
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