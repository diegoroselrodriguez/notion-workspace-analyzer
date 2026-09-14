export function getNotionPageTitle(
  page: {
    properties?: Record<string, unknown>;
  }
): string {

  const properties = page.properties;

  if (!properties) {
    return "Sin nombre";
  }

  for (const property of Object.values(properties)) {

    if (
      typeof property !== "object" ||
      property === null ||
      !("type" in property)
    ) {
      continue;
    }

    const typedProperty = property as {
      type?: string;
      title?: Array<{
        plain_text?: string;
      }>;
    };

    if (typedProperty.type !== "title") {
      continue;
    }

    const title =
      typedProperty.title
        ?.map(item => item.plain_text ?? "")
        .join("")
        .trim();

    if (title) {
      return title;
    }

  }

  return "Sin nombre";

}