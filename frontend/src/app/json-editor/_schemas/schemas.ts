import { z } from "zod";

/** Deployment object (optional inside each install method now) */
export const DeploymentSchema = z.object({
  script: z.boolean().optional(),
  docker: z.boolean().optional(),
  docker_compose: z.boolean().optional(),
  helm: z.boolean().optional(),
  kubernetes: z.boolean().optional(),
  terraform: z.boolean().optional(),
  paths: z.object({
    script: z.string().nullable().optional(),
    docker: z.string().nullable().optional(),
    docker_compose: z.string().nullable().optional(),
    helm: z.string().nullable().optional(),
    kubernetes: z.string().nullable().optional(),
    terraform: z.string().nullable().optional(),
  }).optional(),
}).partial();

/** Hosting (flags) */
export const HostingSchema = z.object({
  self_hosted: z.boolean().optional(),
  managed_cloud: z.boolean().optional(),
}).partial();

/** UI (flags) */
export const UiSchema = z.object({
  cli: z.boolean().optional(),
  gui: z.boolean().optional(),
  web_ui: z.boolean().optional(),
  api: z.boolean().optional(),
  tui: z.boolean().optional(),
}).partial();

export const PlatformSchema = z.object({
  /** Top-level flags used by your main JSONGenerator UI */
  desktop: z.boolean().optional(),
  mobile: z.boolean().optional(),
  web_extensions: z.boolean().optional(),
  hosting: z.boolean().optional(),
  ui_interface: z.boolean().optional(),

  /** Extended nested platform fields (for install-method usage) */
  browser_extension: z.boolean().optional(),
  web_app: z.boolean().optional(),
  cli_only: z.boolean().optional(),

  /** Optional nested hosting and UI */
  hosting_detail: HostingSchema.optional(),
  ui: UiSchema.optional(),

  /** OS-level details (optional, not required by main UI but useful in metadata) */
  desktop_detail: z
    .object({
      linux: z.boolean().optional(),
      windows: z.boolean().optional(),
      macos: z.boolean().optional(),
    })
    .optional(),

  mobile_detail: z
    .object({
      android: z.boolean().optional(),
      ios: z.boolean().optional(),
    })
    .optional(),
}).partial();

/** Single install method shape */
export const InstallMethodSchema = z.object({
  platform: PlatformSchema.optional(),
  deployment: DeploymentSchema.optional(),
});

/** Main Script schema */
export const ScriptSchema = z.object({
  name: z.string().min(1, "Name is required"),
  slug: z.string().min(1, "Slug is required"),
  categories: z.array(z.number()).min(1, "At least one category is required"),

  date_created: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format"),

  interface_port: z.number().nullable().optional(),

  documentation: z.string().url().nullable().optional(),
  website: z.string().url().nullable().optional(),
  source_code: z.string().url().nullable().optional(),
  logo: z.string().url().nullable().optional(),

  description: z.string().min(1, "Description is required"),

  install_methods: z.array(InstallMethodSchema).min(1, "At least one install method is required"),

  default_credentials: z
    .object({
      username: z.string().nullable(),
      password: z.string().nullable(),
    })
    .optional(),

  platform: PlatformSchema.optional(),

  notes: z
    .array(
      z.object({
        text: z.string().min(1, "Note text cannot be empty"),
        type: z.string().min(1, "Note type cannot be empty"),
      })
    )
    .optional()
    .default([]),
});

export type Script = z.infer<typeof ScriptSchema>;
