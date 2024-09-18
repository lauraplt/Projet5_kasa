import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Layout from '../components/Layout';
import Home from '../pages/Home'; 
import About from '../pages/About'; 
import Accommodations from '../pages/Accommodations'; 
import NotFound from '../pages/NotFound';
import '../app.css'; 

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
                    <Route path="/About" element={<About />} /> 
                    <Route path="/Accommodations/:id" element={<Accommodations />} /> 
                    <Route path="*" element={<NotFound />} /> 
                </Routes>
            </Layout>
        </Router>
            );
        }
        export default router;