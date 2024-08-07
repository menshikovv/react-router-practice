import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Cards from "./components/Cards/Cards";
import Layout from './components/Layout/Layout'
import Card from './components/Card/Card'

export const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout />}>
            <Route index element={<Cards />} />
            <Route path='/:id' element={<Cards />}/>
    </Route>
))