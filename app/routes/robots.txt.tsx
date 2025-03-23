export const loader = async () => {
  return new Response(
    `User-agent: *
     Allow: /
     Sitemap: https://kaynanwallen.tech/sitemap.xml`,
    { headers: { "Content-Type": "text/plain" } }
  );
};
