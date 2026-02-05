import Icon from "./Icon";

function Profile({ onNavigate }) {
  const user = {
    name: "Akhdaan The Great",
    email: "akhdaan@example.com",
    phone: "+62 812 3456 7890",
    memberSince: "January 2024",
    totalBookings: 5,
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80",
  };

  const bookings = [
    {
      id: "BT1706543210",
      destination: "Mount Batur Sunrise Trek",
      date: "2026-02-20",
      guests: 2,
      total: 1300000,
      status: "upcoming",
    },
    {
      id: "BT1705234567",
      destination: "Nusa Penida Island",
      date: "2026-01-15",
      guests: 4,
      total: 3400000,
      status: "completed",
    },
    {
      id: "BT1704123456",
      destination: "Ubud Rice Terraces",
      date: "2025-12-10",
      guests: 2,
      total: 900000,
      status: "completed",
    },
  ];

  const getStatusBadge = (status) => {
    if (status === "upcoming") {
      return (
        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
          Upcoming
        </span>
      );
    }
    if (status === "completed") {
      return (
        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
          Completed
        </span>
      );
    }
    return (
      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
        Cancelled
      </span>
    );
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <button
          onClick={() => onNavigate("dashboard")}
          className="text-teal-700 hover:text-teal-800 font-semibold mb-4 flex items-center gap-2"
        >
          ← Back to Dashboard
        </button>

        <h1 className="text-4xl font-bold text-gray-800 mb-2">My Profile</h1>
        <p className="text-gray-600 mb-8">Manage your account and bookings</p>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24 border border-slate-100">
              <div className="text-center mb-6">
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-32 h-32 rounded-full object-cover mx-auto mb-4 border-4 border-teal-100"
                />
                <h2 className="text-2xl font-bold text-gray-800 mb-1">
                  {user.name}
                </h2>
                <p className="text-gray-600 text-sm">
                  Member since {user.memberSince}
                </p>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-gray-700">
                  <Icon name="mail" className="w-5 h-5" />
                  <span className="text-sm">{user.email}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Icon name="phone" className="w-5 h-5" />
                  <span className="text-sm">{user.phone}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-teal-700">
                    {user.totalBookings}
                  </div>
                  <div className="text-xs text-gray-600">Total Bookings</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-4 text-center">
                  <div className="text-3xl font-bold text-green-600">2</div>
                  <div className="text-xs text-gray-600">Upcoming Tours</div>
                </div>
              </div>

              <button
                onClick={() => alert("Edit profile feature coming soon!")}
                className="w-full py-3 bg-teal-600 text-white rounded-xl font-semibold hover:bg-teal-700 hover:shadow-lg transition-all"
              >
                Edit Profile
              </button>

              <button
                onClick={() => alert("Logged out!")}
                className="w-full mt-3 py-3 bg-red-50 text-red-600 rounded-xl font-semibold hover:bg-red-100 transition-all"
              >
                Logout
              </button>
            </div>
          </div>

          {/* Bookings List */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-100">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">
                  My Bookings
                </h2>
                <div className="flex gap-2">
                  <button className="px-4 py-2 bg-teal-100 text-teal-700 rounded-lg font-semibold text-sm">
                    All
                  </button>
                  <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg font-semibold text-sm hover:bg-gray-200">
                    Upcoming
                  </button>
                  <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg font-semibold text-sm hover:bg-gray-200">
                    Past
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {bookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="border border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-1">
                          {booking.destination}
                        </h3>
                        <p className="text-sm text-gray-600">
                          Order ID: {booking.id}
                        </p>
                      </div>
                      {getStatusBadge(booking.status)}
                    </div>

                    <div className="grid md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center gap-2 text-gray-700">
                        <Icon name="calendar" className="w-4 h-4" />
                        <div>
                          <div className="text-xs text-gray-500">Date</div>
                          <div className="font-semibold text-sm">
                            {new Date(booking.date).toLocaleDateString(
                              "id-ID",
                              {
                                day: "numeric",
                                month: "short",
                                year: "numeric",
                              },
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <Icon name="users" className="w-4 h-4" />
                        <div>
                          <div className="text-xs text-gray-500">Guests</div>
                          <div className="font-semibold text-sm">
                            {booking.guests} person
                            {booking.guests > 1 ? "s" : ""}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <Icon name="money" className="w-4 h-4" />
                        <div>
                          <div className="text-xs text-gray-500">Total</div>
                          <div className="font-semibold text-sm text-teal-700">
                            Rp {booking.total.toLocaleString("id-ID")}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() =>
                          alert("View booking details: " + booking.id)
                        }
                        className="flex-1 py-2 bg-gray-100 text-gray-700 rounded-lg font-semibold hover:bg-gray-200 transition-all"
                      >
                        View Details
                      </button>
                      {booking.status === "upcoming" && (
                        <button
                          onClick={() =>
                            alert("Download e-ticket: " + booking.id)
                          }
                          className="flex-1 py-2 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 hover:shadow-lg transition-all"
                        >
                          Download E-Ticket
                        </button>
                      )}
                      {booking.status === "completed" && (
                        <button
                          onClick={() =>
                            alert("Write review for: " + booking.destination)
                          }
                          className="flex-1 py-2 bg-amber-100 text-amber-700 rounded-lg font-semibold hover:bg-amber-200 transition-all"
                        >
                          Write Review
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {bookings.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-6xl mb-4 flex items-center justify-center text-blue-600">
                    <Icon name="bag" className="w-12 h-12" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    No bookings yet
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Start planning your Bali adventure!
                  </p>
                  <button
                    onClick={() => onNavigate("destinations")}
                    className="px-8 py-3 bg-teal-600 text-white rounded-lg font-semibold hover:bg-teal-700 hover:shadow-lg transition-all"
                  >
                    Explore Destinations
                  </button>
                </div>
              )}
            </div>

            {/* Loyalty Program */}
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl shadow-lg p-8 mt-8 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                    <Icon name="gift" className="w-6 h-6" />
                    Loyalty Program
                  </h3>
                  <p className="text-purple-100 mb-4">
                    You've earned 250 points! 50 more points to unlock Gold
                    status.
                  </p>
                  <div className="bg-white/20 rounded-full h-3 w-64 mb-2">
                    <div
                      className="bg-white rounded-full h-3"
                      style={{ width: "83%" }}
                    ></div>
                  </div>
                  <p className="text-sm text-purple-100">
                    250 / 300 points to Gold
                  </p>
                </div>
                <div className="text-6xl">
                  <Icon name="crown" className="w-12 h-12" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
