const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

const pageService = {
  getPageContent: async (slug: string) => {
    try {
      const response = await fetch(`${API_URL}/pages/content/${slug}`);
      if (!response.ok) {
        return {};
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching page content:", error);
      return {};
    }
  },

  listPages: async () => {
    try {
      const response = await fetch(`${API_URL}/pages/select`);
      if (!response.ok) {
        return [];
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error listing pages:", error);
      return [];
    }
  },
};

export default pageService;
