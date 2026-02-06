import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomeView from './views/HomeView';
import HistoryView from './views/HistoryView';
import StatsView from './views/StatsView';

import StoryReaderView from './views/StoryReaderView';

// Import View styles
import './views/Views.css';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeView />} />
          <Route path="history" element={<HistoryView />} />
          <Route path="stats" element={<StatsView />} />
          <Route path="story/:id" element={<StoryReaderView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
