import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://workingenglishlab.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/cursos/", "/diagnostico", "/leccion-de-muestra"],
        disallow: ["/app/", "/api/", "/acceder", "/registro", "/checkout/", "/auth/"],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}

