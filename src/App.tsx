import Home from "./components/Home";
import MainLayout from "./layout/MainLayout";
import "./App.css";
function App() {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
  );
}

export default App;

// const RoutingComponent = () => {
//   <BrowserRouter>
//     <MainLayout>
//       <Routes>
//         <Route index path="/" Component={Home} />
//         <Route path="/about" Component={About} />
//         <Route Component={NotFound} />
//       </Routes>
//     </MainLayout>
//   </BrowserRouter>;
// };
