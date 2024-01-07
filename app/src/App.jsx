import * as MyLayout from "./lib/MyLayout";
import {
  RouterProvider,
} from "react-router-dom";

import router from "./router";

const App = () => (
  <MyLayout.Layout>
    <RouterProvider router={router} />
  </MyLayout.Layout>
);

export default App;
