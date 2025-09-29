import { defineCollection, z } from 'astro:content';

const packages = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		slug: z.string(),
		duration: z.string(),
		price: z.number(),
		date: z.date(),
		itinerary: z
			.array(z.object({ day: z.string(), activity: z.string() }))
			.optional(),
		included: z.array(z.string()).optional(),
		not_included: z.array(z.string()).optional(),
		gallery: z.array(z.string()).optional(),
		body: z.string().optional(), // markdown fallback
	}),
});

export const collections = {
	packages,
};
