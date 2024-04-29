export async function downloadDirList() {
  try {
    const response = await fetch(
      "https://api.github.com/repos/alifhaider/alifhaider.com/contents",
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
