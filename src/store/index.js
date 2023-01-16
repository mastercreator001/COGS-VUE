// This store has been created to act as a top level store for all the sub stores.  Common tasks which are not service specific (i.e. auth) should be added here
// service specific state management should be added to a separate file and added in the modules object below.
import { createStore } from "vuex";
import postsStore from "./modules/postsStore";
import quickMemoriesgallery from "./modules/quickMemoriesgallery";
export default createStore({
  modules: {
    postsStore,
    export
  },
});
import { createStore } from "vuex";

