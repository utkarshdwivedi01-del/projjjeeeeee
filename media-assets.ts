import {
    pgSchema,
    serial,
    uuid,
    integer,
    varchar,
} from 'drizzle-orm/pg-core';
import { projects } from './portfolio-core';

/**
 * media_assets schema — Per Table 1:
 * Stores metadata, alt text, and storage URIs for WebP image
 * sequences required for scroll-scrubbable video playback.
 */
export const mediaAssetsSchema = pgSchema('media_assets');

// ─── IMAGE SEQUENCES (Table 2) ─────────────────────────────
export const imageSequences = mediaAssetsSchema.table('image_sequences', {
    id: serial('id').primaryKey(),
    projectId: uuid('project_id')
        .notNull()
        .references(() => projects.id, { onDelete: 'cascade' }),
    sequenceOrder: integer('sequence_order').notNull(),
    webpUri: varchar('webp_uri', { length: 500 }).notNull(),
    altText: varchar('alt_text', { length: 500 }),
    width: integer('width'),
    height: integer('height'),
    sizeBytes: integer('size_bytes'),
});

export type ImageSequence = typeof imageSequences.$inferSelect;
export type NewImageSequence = typeof imageSequences.$inferInsert;
