import { useState } from "react";
import Icon from "./Icon";

function Cart({ cart, onUpdateCart, onRemoveFromCart, onNavigate }) {
  const [editingItem, setEditingItem] = useState(null);

  const updateQuantity = (item, newGuests) => {
    if (newGuests < 1) return;
    onUpdateCart({ ...item, guests: newGuests });
  };

  const updateDate = (item, newDate) => {
    onUpdateCart({ ...item, bookingDate: newDate });
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.guests,
    0,
  );
  const tax = subtotal * 0.11; // PPN 11%
  const serviceFee = 25000;
  const total = subtotal + tax + serviceFee;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <button
            onClick={() => onNavigate("dashboard")}
            className="text-teal-700 hover:text-teal-800 font-semibold mb-8 flex items-center gap-2"
          >
            ← Back to Dashboard
          </button>

          <div className="text-center py-16">
            <div className="text-8xl mb-6 flex items-center justify-center text-teal-700">
              <Icon name="cart" className="w-20 h-20" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Your cart is empty
            </h2>
            <p className="text-gray-600 mb-8">
              Start exploring and add some amazing tours to your cart!
            </p>
            <button
              onClick={() => onNavigate("destinations")}
              className="px-8 py-4 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 hover:shadow-lg transition-all"
            >
              Browse Destinations
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <button
          onClick={() => onNavigate("dashboard")}
          className="text-teal-700 hover:text-teal-800 font-semibold mb-4 flex items-center gap-2"
        >
          ← Back to Dashboard
        </button>

        <h1 className="text-4xl font-bold text-gray-800 mb-2">Shopping Cart</h1>
        <p className="text-gray-600 mb-8">Review your selected tours</p>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow border border-slate-100"
              >
                <div className="flex gap-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-32 h-32 object-cover rounded-xl"
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">
                          {item.name}
                        </h3>
                        <p className="text-gray-600 text-sm flex items-center gap-2">
                          <Icon name="pin" className="w-4 h-4" />
                          {item.location}
                        </p>
                        <p className="text-gray-500 text-xs mt-1 flex items-center gap-2">
                          <Icon name="clock" className="w-3.5 h-3.5" />
                          {item.duration}
                        </p>
                      </div>
                      <button
                        onClick={() => onRemoveFromCart(index)}
                        className="text-red-500 hover:text-red-700"
                        aria-label="Remove item"
                      >
                        <Icon name="trash" className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-4">
                      <div>
                        <label className="text-sm text-gray-600 block mb-1">
                          Booking Date
                        </label>
                        <input
                          type="date"
                          value={item.bookingDate}
                          min={new Date().toISOString().split("T")[0]}
                          onChange={(e) => updateDate(item, e.target.value)}
                          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                        />
                      </div>
                      <div>
                        <label className="text-sm text-gray-600 block mb-1">
                          Number of Guests
                        </label>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() =>
                              updateQuantity(item, item.guests - 1)
                            }
                            className="w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-lg font-bold flex items-center justify-center"
                            aria-label="Decrease guests"
                          >
                            <Icon name="minus" className="w-4 h-4" />
                          </button>
                          <span className="font-bold text-lg">
                            {item.guests}
                          </span>
                          <button
                            onClick={() =>
                              updateQuantity(item, item.guests + 1)
                            }
                            className="w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-lg font-bold flex items-center justify-center"
                            aria-label="Increase guests"
                          >
                            <Icon name="plus" className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-gray-200 flex justify-between items-center">
                      <div className="text-sm text-gray-600">
                        Rp {item.price.toLocaleString("id-ID")} × {item.guests}{" "}
                        guest{item.guests > 1 ? "s" : ""}
                      </div>
                      <div className="text-2xl font-bold text-teal-700">
                        Rp {(item.price * item.guests).toLocaleString("id-ID")}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <button
              onClick={() => onNavigate("destinations")}
              className="w-full py-4 bg-white border-2 border-dashed border-slate-300 rounded-2xl text-slate-600 font-semibold hover:border-teal-500 hover:text-teal-700 transition-all"
            >
              + Add More Tours
            </button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24 border border-slate-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Order Summary
              </h2>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>
                    Subtotal ({cart.length} item{cart.length > 1 ? "s" : ""})
                  </span>
                  <span>Rp {subtotal.toLocaleString("id-ID")}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax (11%)</span>
                  <span>Rp {Math.round(tax).toLocaleString("id-ID")}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Service Fee</span>
                  <span>Rp {serviceFee.toLocaleString("id-ID")}</span>
                </div>
                <div className="border-t border-gray-200 pt-3 mt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-800">
                      Total
                    </span>
                    <span className="text-2xl font-bold text-teal-700">
                      Rp {Math.round(total).toLocaleString("id-ID")}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={() =>
                  onNavigate("checkout", { total: Math.round(total) })
                }
                className="w-full py-4 bg-teal-600 text-white rounded-xl font-bold text-lg hover:bg-teal-700 hover:shadow-xl hover:scale-105 transition-all mb-4"
              >
                Proceed to Checkout
              </button>

              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-start gap-2">
                  <Icon
                    name="check"
                    className="w-4 h-4 text-green-500 mt-0.5"
                  />
                  <span>Free cancellation up to 24 hours before</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon
                    name="check"
                    className="w-4 h-4 text-green-500 mt-0.5"
                  />
                  <span>Instant confirmation</span>
                </div>
                <div className="flex items-start gap-2">
                  <Icon
                    name="check"
                    className="w-4 h-4 text-green-500 mt-0.5"
                  />
                  <span>Secure payment</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
