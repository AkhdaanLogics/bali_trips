import { useEffect, useState } from "react";
import Icon from "./Icon";

function Success({ onNavigate, orderData }) {
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    setTimeout(() => setShowConfetti(false), 3000);
  }, []);

  if (!orderData) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-16 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">No order data found</p>
          <button
            onClick={() => onNavigate("dashboard")}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    );
  }

  const { orderId, total, formData } = orderData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 pt-24 pb-16">
      {showConfetti && (
        <div className="fixed inset-0 pointer-events-none z-50 flex items-center justify-center">
          <div className="text-8xl animate-bounce text-yellow-400">
            <Icon name="sparkles" className="w-20 h-20" />
          </div>
        </div>
      )}

      <div className="max-w-3xl mx-auto px-6">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Success Header */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 p-12 text-center text-white">
            <div className="text-8xl mb-4 flex items-center justify-center">
              <Icon name="check" className="w-20 h-20" />
            </div>
            <h1 className="text-4xl font-bold mb-2">Booking Confirmed!</h1>
            <p className="text-xl text-green-100">Your adventure awaits!</p>
          </div>

          {/* Order Details */}
          <div className="p-8">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 mb-6">
              <div className="text-center mb-4">
                <div className="text-sm text-gray-600 mb-1">Order ID</div>
                <div className="text-3xl font-bold text-gray-800">
                  {orderId}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-sm text-gray-600 mb-1">Total Paid</div>
                  <div className="text-xl font-bold text-teal-700">
                    Rp {total.toLocaleString("id-ID")}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-gray-600 mb-1">Status</div>
                  <div className="inline-block px-4 py-1 bg-emerald-100 text-emerald-700 rounded-full font-semibold">
                    Confirmed
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Information */}
            <div className="mb-6">
              <h3 className="font-bold text-lg text-gray-800 mb-3 flex items-center gap-2">
                <Icon name="mail" className="w-5 h-5 text-blue-600" />
                Confirmation Details
              </h3>
              <div className="bg-gray-50 rounded-xl p-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Name:</span>
                  <span className="font-semibold text-gray-800">
                    {formData.fullName}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Email:</span>
                  <span className="font-semibold text-gray-800">
                    {formData.email}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Phone:</span>
                  <span className="font-semibold text-gray-800">
                    {formData.phone}
                  </span>
                </div>
              </div>
            </div>

            {/* Next Steps */}
            <div className="mb-6">
              <h3 className="font-bold text-lg text-gray-800 mb-3">
                Next Steps
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-teal-100 text-teal-700 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">
                      Check Your Email
                    </div>
                    <div className="text-sm text-gray-600">
                      We've sent confirmation and e-tickets to {formData.email}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-teal-100 text-teal-700 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">
                      Prepare Your Documents
                    </div>
                    <div className="text-sm text-gray-600">
                      Bring valid ID and booking confirmation on tour day
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-teal-100 text-teal-700 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <div className="font-semibold text-gray-800">
                      Meet Your Guide
                    </div>
                    <div className="text-sm text-gray-600">
                      Guide will contact you 1 day before with pickup details
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Info */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
              <div className="flex gap-3">
                <Icon name="info" className="w-6 h-6 text-yellow-600" />
                <div>
                  <div className="font-semibold text-gray-800 mb-1">
                    Important Information
                  </div>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Free cancellation up to 24 hours before tour</li>
                    <li>• Save this order ID for any inquiries</li>
                    <li>• Check weather forecast before your tour</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="grid md:grid-cols-2 gap-4">
              <button
                onClick={() => onNavigate("dashboard")}
                className="py-4 bg-teal-600 text-white rounded-xl font-bold hover:bg-teal-700 hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Icon name="home" className="w-5 h-5" />
                Back to Home
              </button>
              <button
                onClick={() => onNavigate("profile")}
                className="py-4 bg-white border-2 border-teal-600 text-teal-700 rounded-xl font-bold hover:bg-teal-50 transition-all flex items-center justify-center gap-2"
              >
                <Icon name="bag" className="w-5 h-5" />
                View My Bookings
              </button>
            </div>

            {/* Share */}
            <div className="mt-6 text-center">
              <p className="text-gray-600 text-sm mb-3">
                Share your excitement!
              </p>
              <div className="flex justify-center gap-3">
                <button className="px-6 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all">
                  Facebook
                </button>
                <button className="px-6 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all">
                  Twitter
                </button>
                <button className="px-6 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all">
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 text-center text-gray-600">
          <p className="mb-2">Need help? Contact us 24/7</p>
          <p className="font-semibold flex items-center justify-center gap-3">
            <span className="flex items-center gap-2">
              <Icon name="phone" className="w-4 h-4" />
              +62 812 3456 7890
            </span>
            <span className="text-gray-400">|</span>
            <span className="flex items-center gap-2">
              <Icon name="mail" className="w-4 h-4" />
              support@balitrips.com
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Success;
