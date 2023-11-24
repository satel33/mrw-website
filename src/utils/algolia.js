import algoliasearch from "algoliasearch";

const client = algoliasearch("V75SBG9DVB", "9065a5a22a9e6917c2e6553543cadf62");
export const MRW_MAIN = client.initIndex("mrw_MAIN");

export const mainSearch = (query, callback) => {
  MRW_MAIN.search(query, { hitsPerPage: 50 })
    .then(({ hits }) => {
      return callback(hits);
    })
    .catch((err) => {
      console.log(err, "Err during Algolia main search");
    });
};
