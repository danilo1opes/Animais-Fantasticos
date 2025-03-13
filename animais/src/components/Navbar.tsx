import { useState, useEffect, useRef } from 'react';
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

interface NavbarProps {
  onLoginClick: () => void;
}

export function Navbar({ onLoginClick }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useOutsideClick(() => {
    if (isMenuOpen) setIsMenuOpen(false);
  });

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="grid items-center">
        {/* Mobile Menu Button */}
        <div className="md:hidden flex bg-[#fb5] p-4">
          <div className="uppercase bg-black text-white p-1 px-4 rounded-sm flex items-center">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg transition-transform duration-300 focus:ring-2 focus:ring-white"
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
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block w-full mt-8 mb-8 bg-[#fb5]">
          <ul className="flex gap-16 flex-wrap p-5 font-bold uppercase">
            <li>
              <a href="#">Animais</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Contato</a>
            </li>
            <li>
              <a onClick={onLoginClick} className=" uppercase cursor-pointer">
                Login →
              </a>
            </li>
          </ul>
        </nav>

        {/* Mobile Navigation with animation and positioning from original code */}
        <div ref={menuRef} className="relative md:hidden">
          <nav
            className={`fixed top-30 left-0 bg-[#fb5] w-40 z-50 shadow-md
                      ${isMenuOpen ? 'block' : 'hidden'}
                      origin-top-right transform transition-all duration-300`}
            style={{
              animation: isMenuOpen ? 'show-right 0.3s forwards' : 'none',
              padding: '20px 20px 20px 0',
            }}
          >
            <ul className="flex flex-col space-y-4 p-4 font-bold uppercase">
              <li>
                <a className="block py-2" href="#">
                  Animais
                </a>
              </li>
              <li>
                <a className="block py-2" href="#">
                  FAQ
                </a>
              </li>
              <li>
                <a className="block py-2" href="#">
                  Contato
                </a>
              </li>
              <li>
                <a onClick={onLoginClick} className="uppercase cursor-pointer">
                  Login →
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
