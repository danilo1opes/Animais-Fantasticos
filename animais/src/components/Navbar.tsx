import { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { X } from 'lucide-react';

function useOutsideClick(callback: () => void) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [callback]);

  return ref;
}

export function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useOutsideClick(() => {
    if (isMenuOpen) setIsMenuOpen(false);
  });

  const isActive = (path: string) => location.pathname === path;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="flex justify-between items-center">
        {/* Mobile Menu Button */}
        <div className="md:hidden uppercase bg-black text-white p-2 px-4 rounded-sm flex items-center">
          <button
            onClick={toggleMenu}
            className="p-2 rounded-lg transition-transform duration-300"
            aria-label={isMenuOpen ? 'Fechar Menu' : 'Abrir Menu'}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <div className="flex flex-col justify-center items-center w-6 h-6">
                <span className="block w-5 h-0.5 bg-white mb-1"></span>
                <span className="block w-5 h-0.5 bg-white mb-1"></span>
                <span className="block w-5 h-0.5 bg-white"></span>
              </div>
            )}
          </button>
          <span className="ml-2">Menu</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block w-full mt-8 mb-8 bg-[#fb5]">
          <ul className="flex gap-16 flex-wrap p-5 font-bold uppercase">
            <li>
              <a className="hover:text-gray-700 transition-colors" href="#">
                Animais
              </a>
            </li>
            <li>
              <a className="hover:text-gray-700 transition-colors" href="#">
                FAQ
              </a>
            </li>
            <li>
              <a className="hover:text-gray-700 transition-colors" href="#">
                Contato
              </a>
            </li>
            <li>
              <a
                href="https://github.com/danilo1opes"
                target="_blank"
                rel="noopener noreferrer"
                className={`${
                  isActive('https://github.com/danilo1opes')
                    ? 'text-gray-700'
                    : ''
                } hover:text-gray-700 transition-colors uppercase`}
              >
                Dev →
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation with animation and positioning from original code */}
        <div ref={menuRef} className="relative md:hidden">
          <nav
            className={`absolute top-0 right-0 bg-[#fb5] w-40 z-50 shadow-md
                      ${isMenuOpen ? 'block' : 'hidden'}
                      origin-top-right transform transition-all duration-300`}
            style={{
              animation: isMenuOpen ? 'show-right 0.3s forwards' : 'none',
              padding: '60px 0 20px 0',
            }}
          >
            <ul className="flex flex-col space-y-4 p-4 font-bold uppercase">
              <li>
                <a
                  className="block py-2 hover:text-gray-700 transition-colors"
                  href="#"
                >
                  Animais
                </a>
              </li>
              <li>
                <a
                  className="block py-2 hover:text-gray-700 transition-colors"
                  href="#"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  className="block py-2 hover:text-gray-700 transition-colors"
                  href="#"
                >
                  Contato
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/danilo1opes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block py-2 ${
                    isActive('https://github.com/danilo1opes')
                      ? 'text-gray-700'
                      : ''
                  } hover:text-gray-700 transition-colors`}
                >
                  Dev →
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
