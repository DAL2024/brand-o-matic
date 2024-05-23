import { Website as TWebsite } from "../api/website/Website";

export const WEBSITE_TITLE_FIELD = "url";

export const WebsiteTitle = (record: TWebsite): string => {
  return record.url?.toString() || String(record.id);
};
