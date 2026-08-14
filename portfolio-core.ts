import {
    pgSchema,
    uuid,
    varchar,
    text,
    timestamp,
    serial,
    primaryKey,
    index,
} from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';

/**
 * portfolio_core schema — Per Table 1:
 * Houses primary data entities: projects, tags, projects_to_tags junction.
 */
export const portfolioCoreSchema = pgSchema('portfolio_core');

// ─── PROJECTS TABLE (Table 2) ───────────────────────────────
export const projects = portfolioCoreSchema.table(
    'projects',
    {
        id: uuid('id')
            .default(sql`gen_random_uuid()`)
            .primaryKey(),
        title: varchar('title', { length: 255 }).notNull(),
        slug: varchar('slug', { length: 255 }).notNull().unique(),
        content: text('content').notNull(),
        description: text('description'),
        category: varchar('category', { length: 100 }),
        year: varchar('year', { length: 4 }),
        liveUrl: varchar('live_url', { length: 500 }),
        repoUrl: varchar('repo_url', { length: 500 }),
        color: varchar('color', { length: 7 }),
        publishedAt: timestamp('published_at', { withTimezone: true }).defaultNow(),
        createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
        updatedAt: timestamp('updated_at', { withTimezone: true }).defaultNow(),
        // tsvector column for Full-Text Search (GIN-indexed)
        searchVector: text('search_vector'),
    },
    (table) => [
        index('projects_slug_idx').on(table.slug),
        index('projects_published_idx').on(table.publishedAt),
    ]
);

// ─── TAGS TABLE (Table 2) ───────────────────────────────────
export const tags = portfolioCoreSchema.table(
    'tags',
    {
        id: serial('id').primaryKey(),
        name: varchar('name', { length: 100 }).notNull().unique(),
        category: varchar('category', { length: 100 }),
    },
    (table) => [index('tags_name_idx').on(table.name)]
);

// ─── PROJECTS_TO_TAGS JUNCTION (Table 2 — Many-to-Many) ────
export const projectsToTags = portfolioCoreSchema.table(
    'projects_to_tags',
    {
        projectId: uuid('project_id')
            .notNull()
            .references(() => projects.id, { onDelete: 'cascade' }),
        tagId: serial('tag_id')
            .notNull()
            .references(() => tags.id, { onDelete: 'cascade' }),
    },
    (table) => [
        primaryKey({ columns: [table.projectId, table.tagId] }),
    ]
);

// ─── CONTACT MESSAGES ───────────────────────────────────────
export const contactMessages = portfolioCoreSchema.table('contact_messages', {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 255 }).notNull(),
    email: varchar('email', { length: 255 }).notNull(),
    message: text('message').notNull(),
    ipAddress: varchar('ip_address', { length: 45 }),
    createdAt: timestamp('created_at', { withTimezone: true }).defaultNow(),
});

export type Project = typeof projects.$inferSelect;
export type NewProject = typeof projects.$inferInsert;
export type Tag = typeof tags.$inferSelect;
export type NewTag = typeof tags.$inferInsert;
export type ContactMessage = typeof contactMessages.$inferSelect;
