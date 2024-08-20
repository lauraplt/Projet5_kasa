import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Layout from '.src/components/Layout'; 
import Home from '.src/pages/Home'; 
import About from '.src/pages/About'; 
import Lodging from '.src/pages/Accommodations'; 
import NotFound from '.src/pages/NotFound';
import '../styles/App.css'; 

/**
 * Component that defines the routing structure of the application using React Router.
	@@ -15,14 +15,14 @@ import '../styles/App.css'; // Import styles
 */
function RoutesPath() {
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
        export default RoutesPath;