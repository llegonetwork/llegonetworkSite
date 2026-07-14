// index.tsx
// frontend entry point

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'

import './index.scss'

import Home from './pages/Home'

import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Socials from './pages/Socials'
import ScrollToTop from './util/ScrollToTop'

import termsContent from "./assets/terms.md?raw";
import privacyContent from "./assets/privacy.md?raw";
import Projects from './pages/Projects'
import Bots from './pages/Bots'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <NavBar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/socials" element={<Socials />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/bots" element={<Bots />} />

          <Route path="/tos" element={<ReactMarkdown>{termsContent}</ReactMarkdown>} />
          <Route path="privacy" element={<ReactMarkdown>{privacyContent}</ReactMarkdown>} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  </StrictMode>,
)
