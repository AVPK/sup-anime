import { apolloClient } from "../../graphql";
import { GET_ANIME_PAGE } from "./quries";
import { GetAnimePage } from "./__generated__/GetAnimePage";

class AnimeService {
  async getAnimePage(page: Number, perPage= 5): Promise<GetAnimePage["Page"]> {
    try {
      const response = await apolloClient.query({
        query: GET_ANIME_PAGE,
        variables: { page, perPage },
      });
      if (!response || !response.data)
        throw new Error("Connot get Anime List Data!");

      return response.data.Page;
    } catch (err) {
      throw err;
    }
  }
}

export default new AnimeService();
