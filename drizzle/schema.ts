import { mysqlEnum, mysqlTable, text, timestamp, varchar } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  id: varchar("id", { length: 64 }).primaryKey(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * Intake form submissions table
 * Stores all data from the multi-step intake form
 */
export const intakeSubmissions = mysqlTable("intake_submissions", {
  id: varchar("id", { length: 64 }).primaryKey(),
  // Step 1: Getting Started
  firstName: varchar("firstName", { length: 100 }),
  lastName: varchar("lastName", { length: 100 }),
  email: varchar("email", { length: 320 }),
  phone: varchar("phone", { length: 20 }),
  
  // Step 2: About Your Business
  businessName: varchar("businessName", { length: 200 }),
  businessStructure: varchar("businessStructure", { length: 50 }),
  industry: varchar("industry", { length: 100 }),
  employeeCount: varchar("employeeCount", { length: 50 }),
  
  // Step 3: Current Status
  currentRevenue: varchar("currentRevenue", { length: 50 }),
  hasWebsite: varchar("hasWebsite", { length: 10 }),
  hasSocialMedia: varchar("hasSocialMedia", { length: 10 }),
  
  // Step 4: What You Need (JSON array of selected services)
  selectedServices: text("selectedServices"),
  
  // Step 5: Your Vision
  primaryGoal: text("primaryGoal"),
  timeline: varchar("timeline", { length: 50 }),
  budget: varchar("budget", { length: 50 }),
  priorityRatings: text("priorityRatings"), // JSON object
  
  // Step 6: Final Details
  preferredContact: varchar("preferredContact", { length: 50 }),
  bestTimeToCall: varchar("bestTimeToCall", { length: 50 }),
  additionalInfo: text("additionalInfo"),
  
  // Metadata
  status: mysqlEnum("status", ["new", "contacted", "in_progress", "completed"]).default("new").notNull(),
  createdAt: timestamp("createdAt").defaultNow(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow(),
});

export type IntakeSubmission = typeof intakeSubmissions.$inferSelect;
export type InsertIntakeSubmission = typeof intakeSubmissions.$inferInsert;
