import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function Modal({ isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg relative min-w-[300px]">
        <button
          className="absolute top-[-10px] right-[-10px] bg-red-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shadow-md"
          onClick={onClose}
        >
          <X />
        </button>

        <h2 className="text-xl font-semibold mb-4 text-center">Login</h2>

        <form className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="border p-2 rounded-lg"
          />
          <input
            type="password"
            placeholder="Senha"
            className="border p-2 rounded-lg"
          />
          <button className="bg-red-600 p2 rounded-lg text-white">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
