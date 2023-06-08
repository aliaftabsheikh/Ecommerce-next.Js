import {
    pgTable,
    serial,
    varchar,
    integer
  } from "drizzle-orm/pg-core";
  
  import { drizzle } from "drizzle-orm/vercel-postgres";
  import { InferModel } from "drizzle-orm";
  import { sql } from "@vercel/postgres";
  
  export const cartTable = pgTable("cart", {
    id: serial("id").primaryKey(),
    user_id : varchar("user_id", { length: 255 }).notNull(),
    product_id : varchar("product_id", { length: 255 }).notNull(),
    quantity: integer("quantity").notNull()
  });
  
  export type cart = InferModel<typeof cartTable>;
  
  export type newCart = InferModel<typeof cartTable, "insert">;
  
  
  // Connect to Vercel Postgres
  
  export const db = drizzle(sql)