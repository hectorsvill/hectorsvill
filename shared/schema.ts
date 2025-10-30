import { z } from "zod";

export interface ProjectType {
  id: number;
  title: string;
  description: string;
  technologies?: string[];
}

export interface SocialLink {
  name: string;
  url: string;
  icon: 'github' | 'linkedin';
}

export const projectSchema = z.object({
  id: z.number(),
  title: z.string(),
  description: z.string(),
  technologies: z.array(z.string()).optional(),
});

export const socialLinkSchema = z.object({
  name: z.string(),
  url: z.string(),
  icon: z.enum(['github', 'linkedin']),
});
