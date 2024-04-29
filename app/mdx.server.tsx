import { downloadDirList } from "./github.server";

export async function getBlogMdxListItems({ request }: { request: Request }) {
  const response = await downloadDirList();
  console.log("response", response);
  return response;
}
