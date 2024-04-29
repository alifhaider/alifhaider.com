export async function downloadDirList(path: string) {
  try {
    const response = await fetch(
      `https://api.github.com/repos/alifhaider/alifhaider.com/contents/${path}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
      },
    );
    const data = await response.json();

    // const file = await getFile();
    // console.log(file);

    return data;
  } catch (error) {
    console.error("Failed to fetch directory list from GitHub");
    console.error(error);
  }
}

export async function getFile() {
  try {
    const response = await fetch(
      `https://api.github.com/repos/alifhaider/alifhaider.com/contents/content/how-i-wrote-dynamic-form.mdx`,
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
      },
    );
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Failed to fetch directory list from GitHub");
    console.error(error);
  }
}
