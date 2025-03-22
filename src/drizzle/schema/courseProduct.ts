import { relations } from 'drizzle-orm';
import { pgTable, primaryKey, uuid } from 'drizzle-orm/pg-core';
import { createdAt, updatedAt } from '../schemaHelpers';
import { CourseTable } from './course';
import { ProductTable } from './product';

export const CourseProductTable = pgTable(
  'course_products',
  {
    courseId: uuid('course_id')
      .notNull()
      .references(() => CourseTable.id, {
        onDelete: 'restrict',
      }),
    productId: uuid('product_id')
      .notNull()
      .references(() => ProductTable.id, {
        onDelete: 'cascade',
      }),
    createdAt,
    updatedAt,
  },
  (t) => [primaryKey({ columns: [t.courseId, t.productId] })]
);

export const CourseProductRelationships = relations(
  CourseProductTable,
  ({ one }) => ({
    course: one(CourseTable, {
      fields: [CourseProductTable.courseId],
      references: [CourseTable.id],
    }),
    product: one(ProductTable, {
      fields: [CourseProductTable.productId],
      references: [ProductTable.id],
    }),
  })
);
