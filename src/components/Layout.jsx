import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { BookOpen, History, Award } from 'lucide-react';
import './Layout.css';

const Layout = () => {
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <div className="layout-container">
            <header className="app-header">
                <h1 className="logo-text">Cuentos Mágicos</h1>
            </header>

            <main className="app-content">
                <Outlet />
            </main>

            <nav className="bottom-nav">
                <Link to="/" className={`nav-item ${isActive('/') ? 'active' : ''}`}>
                    <BookOpen size={24} />
                    <span>Cuento</span>
                </Link>
                <Link to="/history" className={`nav-item ${isActive('/history') ? 'active' : ''}`}>
                    <History size={24} />
                    <span>Historial</span>
                </Link>
                <Link to="/stats" className={`nav-item ${isActive('/stats') ? 'active' : ''}`}>
                    <Award size={24} />
                    <span>Logros</span>
                </Link>
            </nav>
        </div>
    );
};

export default Layout;
