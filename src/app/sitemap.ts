import type { MetadataRoute } from "next";

const baseUrl = "https://workingenglishlab.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Rutas públicas reales (MVP)
  const staticRoutes = ["/", "/diagnostico", "/leccion-de-muestra"];

  // Cursos “semilla” (los que ya estás usando)
  const seedCourses = [
    "/cursos/emailing/b1",
    "/cursos/emailing/b2",
    "/cursos/reuniones/b1",
    "/cursos/llamadas/b1",
  ];

  const urls = [...staticRoutes, ...seedCourses];

  return urls.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}

