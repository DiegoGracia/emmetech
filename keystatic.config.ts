import { config, fields, collection, singleton } from "@keystatic/core";

export default config({
  storage: {
    kind: "local",
  },
  ui: {
    brand: { name: "EMXTECH CMS" },
  },
  collections: {
    services: collection({
      label: "Services",
      slugField: "title",
      path: "content/services/*",
      format: { contentField: "description" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        summary: fields.text({
          label: "Summary",
          description: "Short one-line summary shown in cards",
        }),
        icon: fields.text({
          label: "Icon",
          description: "Icon name or emoji",
        }),
        order: fields.number({
          label: "Display Order",
          defaultValue: 1,
        }),
        description: fields.markdoc({
          label: "Full Description",
        }),
      },
    }),

    team: collection({
      label: "Team Members",
      slugField: "name",
      path: "content/team/*",
      format: { contentField: "bio" },
      schema: {
        name: fields.slug({ name: { label: "Name" } }),
        role: fields.text({ label: "Role / Title" }),
        photo: fields.image({
          label: "Photo",
          directory: "public/images/team",
          publicPath: "/images/team",
        }),
        bio: fields.markdoc({ label: "Bio" }),
      },
    }),

    posts: collection({
      label: "Blog / News",
      slugField: "title",
      path: "content/posts/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        publishedAt: fields.date({ label: "Published Date" }),
        summary: fields.text({ label: "Summary", multiline: true }),
        content: fields.markdoc({ label: "Content" }),
      },
    }),
  },

  singletons: {
    homepage: singleton({
      label: "Homepage",
      path: "content/homepage",
      schema: {
        heroTitle: fields.text({ label: "Hero Title" }),
        heroSubtitle: fields.text({
          label: "Hero Subtitle",
          multiline: true,
        }),
        ctaPrimaryLabel: fields.text({ label: "Primary CTA Button Label" }),
        ctaSecondaryLabel: fields.text({ label: "Secondary CTA Button Label" }),
      },
    }),

    company: singleton({
      label: "Company Info",
      path: "content/company",
      schema: {
        name: fields.text({ label: "Company Name" }),
        tagline: fields.text({ label: "Tagline" }),
        email: fields.text({ label: "Contact Email" }),
        phone: fields.text({ label: "Phone Number" }),
        whatsapp: fields.text({
          label: "WhatsApp Number",
          description: "Include country code, e.g. +34612345678",
        }),
        address: fields.text({ label: "Address", multiline: true }),
        calLink: fields.text({
          label: "Cal.com Link",
          description: "Your Cal.com username/event, e.g. username/meeting",
        }),
        linkedIn: fields.url({ label: "LinkedIn URL" }),
        twitter: fields.url({ label: "Twitter/X URL" }),
      },
    }),
  },
});
