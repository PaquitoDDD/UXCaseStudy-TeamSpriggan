import { useCart } from '../context/CartContext';

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const { cart, removeFromCart, updateQuantity, totalItems, totalPrice, clearCart } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-10 z-40 transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-[450px] bg-white shadow-2xl z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="font-['Montserrat:Bold',sans-serif] text-[28px] text-black">
            Carrito ({totalItems})
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black transition-colors text-[32px] leading-none"
          >
            ×
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-6">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <p className="font-['helvetica-w01-roman:Regular',sans-serif] text-[18px] text-gray-500 mb-4">
                Tu carrito está vacío
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-4 p-4 border border-gray-200 rounded-lg">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[80px] h-[80px] object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="font-['helvetica-w01-roman:Regular',sans-serif] text-[16px] text-black mb-1">
                      {item.name}
                    </h3>
                    <p className="font-['helvetica-w01-roman:Regular',sans-serif] text-[14px] text-gray-600 mb-2">
                      {item.grindType}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center border border-gray-300 rounded">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-1 text-[18px] hover:bg-gray-100 transition-colors"
                        >
                          −
                        </button>
                        <span className="px-4 py-1 text-[14px]">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1 text-[18px] hover:bg-gray-100 transition-colors"
                        >
                          +
                        </button>
                      </div>
                      <span className="font-['helvetica-w01-roman:Regular',sans-serif] text-[16px] text-black">
                        €{(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-400 hover:text-red-500 transition-colors text-[20px] self-start"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cart.length > 0 && (
          <div className="border-t border-gray-200 p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-['Montserrat:Bold',sans-serif] text-[20px] text-black">Total:</span>
              <span className="font-['Montserrat:Bold',sans-serif] text-[24px] text-[#824c0b]">
                €{totalPrice.toFixed(2)}
              </span>
            </div>
            <button
              className="w-full bg-[#0d5eba] text-white font-['helvetica-w01-roman:Regular',sans-serif] text-[18px] py-4 rounded-lg hover:bg-[#0a4a94] transition-colors"
              onClick={() => {
                alert('Procesando pago...');
              }}
            >
              Finalizar Compra
            </button>
            <button
              className="w-full bg-white text-gray-600 font-['helvetica-w01-roman:Regular',sans-serif] text-[16px] py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
              onClick={() => {
                if (confirm('¿Estás seguro de que quieres vaciar el carrito?')) {
                  clearCart();
                }
              }}
            >
              Vaciar Carrito
            </button>
          </div>
        )}
      </div>
    </>
  );
}
