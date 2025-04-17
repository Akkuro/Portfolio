export default function PreloadTranslations() {
  return (
    <>
      <link rel="preload" href="/locales/en/common.json" as="fetch" />
      <link rel="preload" href="/locales/fr/common.json" as="fetch" />
    </>
  );
}
