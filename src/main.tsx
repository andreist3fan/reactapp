import ReactDOM from "react-dom/client";
import AppRouter from "./AppRouter.tsx";
import "bootstrap/dist/css/bootstrap.css";
import "./global.css";
// ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
//

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AppRouter />
);
