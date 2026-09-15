export function getNotionDesignDataSourceId(): string {

  const id = process.env.NOTION_DESIGN_DATA_SOURCE_ID;

  if (!id) {
    throw new Error(
      "Missing environment variable: NOTION_DESIGN_DATA_SOURCE_ID"
    );
  }

  return id;

}
