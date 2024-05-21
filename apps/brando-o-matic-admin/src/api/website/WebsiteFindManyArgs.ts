import { WebsiteWhereInput } from "./WebsiteWhereInput";
import { WebsiteOrderByInput } from "./WebsiteOrderByInput";

export type WebsiteFindManyArgs = {
  where?: WebsiteWhereInput;
  orderBy?: Array<WebsiteOrderByInput>;
  skip?: number;
  take?: number;
};
