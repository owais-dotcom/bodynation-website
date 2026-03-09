import { z, defineCollection } from 'astro:content';

const products = defineCollection({
  type: 'content',
  schema: z.object({
    name:         z.string(),
    category:     z.enum(['protein', 'creatine', 'mass-gainer', 'pre-workout', 'vitamins', 'fat-burner']),
    brand:        z.string(),
    price:        z.number(),
    priceLabel:   z.string().optional(),
    badge:        z.string().optional(),
    badgeColor:   z.enum(['orange', 'blue', 'green']).optional().default('orange'),
    image:        z.string(),
    benefit:      z.string(),
    whatsappMsg:  z.string(),
    inStock:      z.boolean().default(true),
    featured:     z.boolean().default(false),
    order:        z.number().default(99),
  }),
});

const offers = defineCollection({
  type: 'content',
  schema: z.object({
    title:          z.string(),
    tag:            z.string(),
    tagEmoji:       z.string().optional(),
    originalPrice:  z.number(),
    salePrice:      z.number(),
    items:          z.array(z.string()),
    whatsappMsg:    z.string(),
    featured:       z.boolean().default(false),
    active:         z.boolean().default(true),
    order:          z.number().default(99),
  }),
});

const testimonials = defineCollection({
  type: "data",
  schema: z.array(
    z.object({
      name: z.string(),
      initials: z.string(),
      location: z.string(),
      text: z.string(),
      rating: z.number(),
      order: z.number()
    })
  )
});

export const collections = { products, offers, testimonials };
