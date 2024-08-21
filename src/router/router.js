import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Layout from '../components/layout';
import Home from '../pages/Home'; 
import About from '../pages/About'; 
import Accommodations from '../pages/Accommodations'; 
import NotFound from '../pages/NotFound';
import '../App.css'; 

/**
 * Component that defines the routing structure of the application using React Router.
	@@ -15,14 +15,14 @@ import '../styles/App.css'; // Import styles
 */
function router () {
    return (
        <Router> 
            <Layout> 
                <Routes> 
                    <Route path="/" element={<Home />} /> 
                    <Route path="/accueil" element={<Home />} /> 
                    <Route path="/a-propos" element={<About />} /> 
                    <Route path="/logements/:id" element={<Accommodations />} /> 
                    <Route path="*" element={<NotFound />} /> 
                </Routes>
            </Layout>
        </Router>
            );
        }
        export default router;