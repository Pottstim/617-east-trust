import { COOKIE_NAME } from "@shared/const";
import { z } from "zod";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router, protectedProcedure } from "./_core/trpc";
import { createIntakeSubmission, getAllIntakeSubmissions, getIntakeSubmission, updateIntakeSubmissionStatus } from "./db";
import { nanoid } from "nanoid";
import { notifyOwner } from "./_core/notification";

export const appRouter = router({
  system: systemRouter,

  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // Intake form submission router
  intake: router({
    // Submit a new intake form
    submit: publicProcedure
      .input(z.object({
        firstName: z.string().optional(),
        lastName: z.string().optional(),
        email: z.string().email().optional(),
        phone: z.string().optional(),
        businessName: z.string().optional(),
        businessStructure: z.string().optional(),
        industry: z.string().optional(),
        employeeCount: z.string().optional(),
        currentRevenue: z.string().optional(),
        hasWebsite: z.string().optional(),
        hasSocialMedia: z.string().optional(),
        selectedServices: z.string().optional(),
        primaryGoal: z.string().optional(),
        timeline: z.string().optional(),
        budget: z.string().optional(),
        priorityRatings: z.string().optional(),
        preferredContact: z.string().optional(),
        bestTimeToCall: z.string().optional(),
        additionalInfo: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        const id = nanoid();
        const submission = await createIntakeSubmission({
          id,
          ...input,
        });
        
        // Notify owner of new submission
        await notifyOwner({
          title: "New Intake Form Submission",
          content: `New submission from ${input.firstName} ${input.lastName} (${input.email})\nBusiness: ${input.businessName}\nServices: ${input.selectedServices}`,
        });
        
        return { success: true, id };
      }),
    
    // Get all submissions (admin only)
    list: protectedProcedure.query(async () => {
      return await getAllIntakeSubmissions();
    }),
    
    // Get single submission by ID
    get: protectedProcedure
      .input(z.object({ id: z.string() }))
      .query(async ({ input }) => {
        return await getIntakeSubmission(input.id);
      }),
    
    // Update submission status
    updateStatus: protectedProcedure
      .input(z.object({
        id: z.string(),
        status: z.enum(["new", "contacted", "in_progress", "completed"]),
      }))
      .mutation(async ({ input }) => {
        await updateIntakeSubmissionStatus(input.id, input.status);
        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
