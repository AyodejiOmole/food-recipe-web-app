import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./components/Home";
import FoodRecipe from "./components/FoodRecipe";

export const baseUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
function App() {
  const client = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Router>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/food-recipe/:foodId" element={<FoodRecipe/>}/>
          </Routes>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
