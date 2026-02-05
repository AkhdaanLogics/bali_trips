import { useState } from "react";
import Icon from "./Icon";

function Checkout({ cart, total, onNavigate, onClearCart }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Info
    fullName: "",
    email: "",
    phone: "",

    // Payment Method
    paymentMethod: "credit-card",

    // Credit Card
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",

    // Bank Transfer
    bankName: "",

    // E-Wallet
    walletPhone: "",

    // Special Requests
    specialRequests: "",
  });

  const [processing, setProcessing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (step === 1) {
      // Validate personal info
      if (!formData.fullName || !formData.email || !formData.phone) {
        alert("Please fill in all required fields");
        return;
      }
      setStep(2);
    } else if (step === 2) {
      // Process payment (simulated)
      setProcessing(true);
      setTimeout(() => {
        const orderId = "BT" + Date.now();
        onNavigate("success", { orderId, total, formData });
        onClearCart();
      }, 2000);
    }
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.guests,
    0,
  );
  const tax = subtotal * 0.11;
  const serviceFee = 25000;
  const calculatedTotal = Math.round(subtotal + tax + serviceFee);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <button
          onClick={() => onNavigate("cart")}
          className="text-teal-700 hover:text-teal-800 font-semibold mb-4 flex items-center gap-2"
        >
          ← Back to Cart
        </button>

        <h1 className="text-4xl font-bold text-gray-800 mb-2">Checkout</h1>
        <p className="text-gray-600 mb-8">Complete your booking</p>

        {/* Progress Steps */}
        <div className="mb-8 flex items-center justify-center gap-4">
          <div
            className={`flex items-center gap-2 ${step >= 1 ? "text-teal-700" : "text-gray-400"}`}
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 1 ? "bg-teal-600 text-white" : "bg-gray-200"}`}
            >
              {step > 1 ? <Icon name="check" className="w-5 h-5" /> : "1"}
            </div>
            <span className="font-semibold hidden sm:inline">
              Personal Info
            </span>
          </div>
          <div className="w-16 h-1 bg-gray-200">
            <div
              className={`h-full transition-all ${step >= 2 ? "bg-teal-600" : "bg-gray-200"}`}
              style={{ width: step >= 2 ? "100%" : "0%" }}
            ></div>
          </div>
          <div
            className={`flex items-center gap-2 ${step >= 2 ? "text-teal-700" : "text-gray-400"}`}
          >
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 2 ? "bg-teal-600 text-white" : "bg-gray-200"}`}
            >
              2
            </div>
            <span className="font-semibold hidden sm:inline">Payment</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Personal Information
                  </h2>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="john@example.com"
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          placeholder="+62 812 3456 7890"
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Special Requests (Optional)
                      </label>
                      <textarea
                        name="specialRequests"
                        value={formData.specialRequests}
                        onChange={handleInputChange}
                        rows="4"
                        placeholder="Any special requirements or requests..."
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none resize-none"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full mt-6 py-4 bg-teal-600 text-white rounded-xl font-bold text-lg hover:bg-teal-700 hover:shadow-xl hover:scale-105 transition-all"
                  >
                    Continue to Payment
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">
                    Payment Method
                  </h2>

                  {/* Payment Method Selection */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <button
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          paymentMethod: "credit-card",
                        }))
                      }
                      className={`p-4 border-2 rounded-xl font-semibold transition-all ${
                        formData.paymentMethod === "credit-card"
                          ? "border-teal-500 bg-teal-50 text-teal-700"
                          : "border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <span className="flex items-center justify-center gap-2">
                        <Icon name="credit-card" className="w-4 h-4" />
                        Card
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          paymentMethod: "bank-transfer",
                        }))
                      }
                      className={`p-4 border-2 rounded-xl font-semibold transition-all ${
                        formData.paymentMethod === "bank-transfer"
                          ? "border-teal-500 bg-teal-50 text-teal-700"
                          : "border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <span className="flex items-center justify-center gap-2">
                        <Icon name="bank" className="w-4 h-4" />
                        Transfer
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={() =>
                        setFormData((prev) => ({
                          ...prev,
                          paymentMethod: "e-wallet",
                        }))
                      }
                      className={`p-4 border-2 rounded-xl font-semibold transition-all ${
                        formData.paymentMethod === "e-wallet"
                          ? "border-teal-500 bg-teal-50 text-teal-700"
                          : "border-slate-200 hover:border-slate-300"
                      }`}
                    >
                      <span className="flex items-center justify-center gap-2">
                        <Icon name="wallet" className="w-4 h-4" />
                        E-Wallet
                      </span>
                    </button>
                  </div>

                  {/* Credit Card Form */}
                  {formData.paymentMethod === "credit-card" && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Card Number
                        </label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={handleInputChange}
                          placeholder="1234 5678 9012 3456"
                          maxLength="19"
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Cardholder Name
                        </label>
                        <input
                          type="text"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleInputChange}
                          placeholder="JOHN DOE"
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Expiry Date
                          </label>
                          <input
                            type="text"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleInputChange}
                            placeholder="MM/YY"
                            maxLength="5"
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            CVV
                          </label>
                          <input
                            type="text"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            placeholder="123"
                            maxLength="3"
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Bank Transfer */}
                  {formData.paymentMethod === "bank-transfer" && (
                    <div className="space-y-4">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Select Bank
                      </label>
                      <select
                        name="bankName"
                        value={formData.bankName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                      >
                        <option value="">Choose a bank</option>
                        <option value="BCA">BCA</option>
                        <option value="Mandiri">Mandiri</option>
                        <option value="BNI">BNI</option>
                        <option value="BRI">BRI</option>
                      </select>
                      <div className="bg-teal-50 p-4 rounded-lg text-sm text-gray-700">
                        <p className="font-semibold mb-2">Instructions:</p>
                        <ol className="list-decimal list-inside space-y-1">
                          <li>
                            You will receive payment details after confirmation
                          </li>
                          <li>Transfer the exact amount within 24 hours</li>
                          <li>Upload proof of payment to confirm</li>
                        </ol>
                      </div>
                    </div>
                  )}

                  {/* E-Wallet */}
                  {formData.paymentMethod === "e-wallet" && (
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          E-Wallet Phone Number
                        </label>
                        <input
                          type="tel"
                          name="walletPhone"
                          value={formData.walletPhone}
                          onChange={handleInputChange}
                          placeholder="+62 812 3456 7890"
                          className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-teal-500 outline-none"
                        />
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        <div className="border-2 border-slate-200 rounded-lg p-3 text-center hover:border-teal-500 cursor-pointer">
                          <div className="font-bold text-teal-700">GoPay</div>
                        </div>
                        <div className="border-2 border-slate-200 rounded-lg p-3 text-center hover:border-teal-500 cursor-pointer">
                          <div className="font-bold text-teal-700">OVO</div>
                        </div>
                        <div className="border-2 border-slate-200 rounded-lg p-3 text-center hover:border-teal-500 cursor-pointer">
                          <div className="font-bold text-teal-700">DANA</div>
                        </div>
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={processing}
                    className="w-full mt-6 py-4 bg-teal-600 text-white rounded-xl font-bold text-lg hover:bg-teal-700 hover:shadow-xl hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {processing ? (
                      <span className="flex items-center justify-center gap-2">
                        <Icon name="spinner" className="w-4 h-4 animate-spin" />
                        Processing Payment...
                      </span>
                    ) : (
                      `Pay Rp ${calculatedTotal.toLocaleString("id-ID")}`
                    )}
                  </button>

                  <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-600">
                    <Icon name="lock" className="w-4 h-4" />
                    <span>Secured by SSL encryption</span>
                  </div>
                </div>
              )}
            </form>
          </div>

          {/* Order Summary (Sticky) */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24 border border-slate-100">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Order Summary
              </h2>

              <div className="space-y-3 mb-4 max-h-96 overflow-y-auto">
                {cart.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex gap-3 pb-3 border-b border-gray-100"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <div className="font-semibold text-sm text-gray-800">
                        {item.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {item.guests} guest{item.guests > 1 ? "s" : ""}
                      </div>
                      <div className="text-sm font-bold text-teal-700">
                        Rp {(item.price * item.guests).toLocaleString("id-ID")}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-2 text-sm mb-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
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
              </div>

              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-gray-800">Total</span>
                  <span className="text-2xl font-bold text-teal-700">
                    Rp {calculatedTotal.toLocaleString("id-ID")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
