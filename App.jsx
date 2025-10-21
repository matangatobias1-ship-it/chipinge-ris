import React, { useState, useEffect } from "react";

/**
 * CHIPINGE RISE - App.jsx
 * - Vite + React + Tailwind setup
 * - Replace FORM_ACTION with your Formspree endpoint (see README). 
 *
 * Contact email intended: levi.raphael@outlook.com
 */

const FORM_ACTION = "https://formspree.io/f/your_form_id"; // <-- REPLACE this with your Formspree endpoint

const hotels = [
  { id: "h1", name: "Thorn Lodge", pricePerNight: 45, rating: 4.6, img: "https://source.unsplash.com/collection/827743/800x600" },
  { id: "h2", name: "Ridgeview Hotel", pricePerNight: 70, rating: 4.8, img: "https://source.unsplash.com/collection/190727/800x600" },
  { id: "h3", name: "Tea Valley Bungalows", pricePerNight: 55, rating: 4.5, img: "https://source.unsplash.com/collection/1118905/800x600" },
];

const merch = [
  { id: "m1", title: "Chipinge Rise T-shirt", price: 18, sku: "CR-TSHIRT", img: "https://source.unsplash.com/featured/?tshirt" },
  { id: "m2", title: "Chipinge Cap", price: 12, sku: "CR-CAP", img: "https://source.unsplash.com/featured/?cap" },
  { id: "m3", title: "Chipinge Tote Bag", price: 9, sku: "CR-TOTE", img: "https://source.unsplash.com/featured/?bag" },
];

function Navbar({ onOpenCart }) {
  return (
    <nav className="w-full bg-white/90 backdrop-blur-md sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="text-2xl font-extrabold text-teal-700">CHIPINGE RISE</div>
          <div className="hidden md:flex gap-4 items-center text-sm text-neutral-700">
            <a href="#about" className="hover:underline">About</a>
            <a href="#tourism" className="hover:underline">Tourism</a>
            <a href="#youth" className="hover:underline">Youth</a>
            <a href="#bookings" className="hover:underline">Bookings</a>
            <a href="#shop" className="hover:underline">Shop</a>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenCart}
            className="px-3 py-2 bg-orange-500 text-white rounded-md text-sm shadow"
          >
            Cart
          </button>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <header className="relative">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-6 items-center">
        <div className="md:col-span-2">
          <h1 className="text-4xl md:text-6xl font-extrabold text-teal-800 leading-tight">
            Discover Chipinge
          </h1>
          <p className="mt-4 text-neutral-600 max-w-2xl">
            Explore the highlands, vibrant youth projects, and thriving agriculture of Chipinge — tea
            terraces, macadamia farms, and waterfalls await.
          </p>
          <div className="mt-6 flex gap-3">
            <a href="#tourism" className="px-5 py-3 bg-orange-500 text-white rounded-lg shadow font-semibold">Explore</a>
            <a href="#bookings" className="px-5 py-3 border border-teal-700 text-teal-700 rounded-lg font-semibold">Book a stay</a>
          </div>
          <div className="mt-6 flex gap-4 flex-wrap text-sm text-neutral-600">
            <div className="flex items-center gap-2">🌿 Macadamia & Tea</div>
            <div className="flex items-center gap-2">🏞️ Waterfalls & Hikes</div>
            <div className="flex items-center gap-2">🎭 Youth Projects</div>
          </div>
        </div>
        <div className="hidden md:block rounded-xl overflow-hidden shadow-lg">
          <div className="grid grid-cols-1 gap-2">
            <img src="https://source.unsplash.com/featured/?mountain,landscape" alt="Chipinge" className="w-full h-40 object-cover" />
            <img src="https://source.unsplash.com/featured/?youth,smile" alt="Youth" className="w-full h-40 object-cover" />
            <img src="https://source.unsplash.com/featured/?coffee,plantation" alt="Agriculture" className="w-full h-40 object-cover" />
          </div>
        </div>
      </div>
    </header>
  );
}

function Section({ id, title, children }) {
  return (
    <section id={id} className="max-w-7xl mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-teal-800 mb-6">{title}</h2>
      {children}
    </section>
  );
}

function TourismGrid() {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      <Card title="Natural Beauty" desc="Tea terraces and rolling hills." img="https://source.unsplash.com/featured/?tea,field" />
      <Card title="Adventure" desc="Waterfalls, hikes, and viewpoints." img="https://source.unsplash.com/featured/?waterfall" />
      <Card title="Culture" desc="Local markets, music, and crafts." img="https://source.unsplash.com/featured/?market,africa" />
    </div>
  );
}

function Card({ title, desc, img }) {
  return (
    <div className="rounded-xl overflow-hidden shadow">
      <img src={img} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-sm text-neutral-600 mt-2">{desc}</p>
      </div>
    </div>
  );
}

function YouthSection() {
  return (
    <div className="grid md:grid-cols-2 gap-6 items-center">
      <div>
        <p className="text-neutral-700">Chipinge is home to a growing number of youth-led initiatives focused on agriculture, arts, and sustainable tourism. We highlight stories, training programs, and how to get involved.</p>
        <div className="mt-4 flex gap-3">
          <a href="#contact" className="px-4 py-2 bg-teal-700 text-white rounded">Get Involved</a>
          <a href="#" className="px-4 py-2 border border-teal-700 text-teal-700 rounded">Read Stories</a>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <img src="https://source.unsplash.com/featured/?youth,africa" className="w-full h-40 object-cover rounded" />
        <img src="https://source.unsplash.com/featured/?community" className="w-full h-40 object-cover rounded" />
      </div>
    </div>
  );
}

function HotelsGrid({ onOpenBooking }) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {hotels.map((h) => (
        <div key={h.id} className="rounded-xl overflow-hidden shadow">
          <img src={h.img} alt={h.name} className="w-full h-44 object-cover" />
          <div className="p-4">
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">{h.name}</h3>
              <div className="text-sm text-neutral-600">⭐ {h.rating}</div>
            </div>
            <p className="text-sm text-neutral-600 mt-2">From ${h.pricePerNight}/night</p>
            <div className="mt-4 flex gap-2">
              <button onClick={() => onOpenBooking(h)} className="px-4 py-2 bg-orange-500 text-white rounded">Book</button>
              <a href="#" className="px-3 py-2 border rounded text-sm">Details</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function ShopGrid({ addToCart }) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {merch.map((m) => (
        <div key={m.id} className="rounded-xl overflow-hidden shadow">
          <img src={m.img} alt={m.title} className="w-full h-44 object-cover" />
          <div className="p-4">
            <h3 className="font-semibold">{m.title}</h3>
            <p className="text-sm text-neutral-600 mt-1">${m.price}</p>
            <div className="mt-3">
              <button onClick={() => addToCart(m)} className="px-3 py-2 bg-teal-700 text-white rounded">Add to cart</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-teal-800 text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div>
          <div className="font-bold">CHIPINGE RISE</div>
          <div className="text-sm text-teal-100/80 mt-1">Promoting tourism, youth & agriculture</div>
        </div>
        <div className="flex gap-4 items-center">
          <input placeholder="Your email" className="px-3 py-2 rounded text-neutral-800" />
          <button className="px-4 py-2 bg-orange-500 text-white rounded">Subscribe</button>
        </div>
      </div>
    </footer>
  );
}

function Cart({ cart, onClose, updateQty, clearCart, checkout }) {
  const total = cart.reduce((s, it) => s + it.price * it.qty, 0);
  return (
    <div className="fixed right-4 top-20 w-80 bg-white shadow-lg rounded-lg z-50 p-4">
      <div className="flex justify-between items-center">
        <h3 className="font-bold">Your Cart</h3>
        <button onClick={onClose} className="text-sm text-neutral-500">Close</button>
      </div>
      <div className="mt-3">
        {cart.length === 0 ? <div className="text-sm text-neutral-500">Cart is empty</div> : (
          <div>
            {cart.map((c) => (
              <div key={c.id} className="flex justify-between items-center text-sm py-2 border-b">
                <div>
                  <div className="font-medium">{c.title}</div>
                  <div className="text-neutral-500">${c.price} x {c.qty}</div>
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div className="flex gap-1">
                    <button onClick={() => updateQty(c.id, c.qty - 1)} className="px-2 py-1 border rounded">-</button>
                    <button onClick={() => updateQty(c.id, c.qty + 1)} className="px-2 py-1 border rounded">+</button>
                  </div>
                </div>
              </div>
            ))}
            <div className="mt-3 font-semibold">Total: ${total.toFixed(2)}</div>
            <div className="mt-3 flex gap-2">
              <button onClick={checkout} className="flex-1 px-3 py-2 bg-orange-500 text-white rounded">Checkout</button>
              <button onClick={clearCart} className="px-3 py-2 border rounded">Clear</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function BookingModal({ hotel, onClose, saveBooking }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [nights, setNights] = useState(1);

  if (!hotel) return null;

  const price = hotel.pricePerNight * nights;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg w-11/12 md:w-2/3 p-6 shadow-lg">
        <div className="flex justify-between items-center">
          <h3 className="font-bold">Book {hotel.name}</h3>
          <button onClick={onClose} className="text-sm text-neutral-500">Close</button>
        </div>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div>
            <label className="text-sm">Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} className="w-full px-3 py-2 border rounded mt-1" />
            <label className="text-sm mt-2 block">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 border rounded mt-1" />
            <label className="text-sm mt-2 block">Check-in</label>
            <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className="w-full px-3 py-2 border rounded mt-1" />
            <label className="text-sm mt-2 block">Nights</label>
            <input type="number" min={1} value={nights} onChange={(e) => setNights(Number(e.target.value))} className="w-24 px-3 py-2 border rounded mt-1" />
          </div>
          <div>
            <img src={hotel.img} alt={hotel.name} className="w-full h-48 object-cover rounded" />
            <div className="mt-4">
              <div className="font-semibold">Price: ${hotel.pricePerNight}/night</div>
              <div className="mt-2">Total: ${price.toFixed(2)}</div>
              <div className="mt-4 flex gap-2">
                <button onClick={() => { saveBooking({ hotelId: hotel.id, hotelName: hotel.name, name, email, checkIn, nights, total: price }); onClose(); }} className="px-4 py-2 bg-teal-700 text-white rounded">Confirm</button>
                <button onClick={onClose} className="px-4 py-2 border rounded">Cancel</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("cr_cart")) || [];
    } catch (e) {
      return [];
    }
  });
  const [cartOpen, setCartOpen] = useState(false);
  const [bookingHotel, setBookingHotel] = useState(null);
  const [bookings, setBookings] = useState(() => {
    try { return JSON.parse(localStorage.getItem("cr_bookings")) || []; } catch { return []; }
  });

  useEffect(() => { localStorage.setItem("cr_cart", JSON.stringify(cart)); }, [cart]);
  useEffect(() => { localStorage.setItem("cr_bookings", JSON.stringify(bookings)); }, [bookings]);

  function addToCart(item) {
    setCart((c) => {
      const exists = c.find((x) => x.id === item.id);
      if (exists) return c.map((x) => x.id === item.id ? { ...x, qty: x.qty + 1 } : x);
      return [...c, { ...item, qty: 1 }];
    });
    setCartOpen(true);
  }

  function updateQty(id, qty) {
    setCart((c) => c.map((x) => x.id === id ? { ...x, qty: Math.max(1, qty) } : x));
  }

  function clearCart() { setCart([]); }

  function checkout() {
    if (cart.length === 0) return alert("Cart is empty");
    alert("Checkout simulated — replace with real payment flow in production.");
    clearCart();
  }

  function saveBooking(bkg) {
    setBookings((s) => [...s, { id: `bk_${Date.now()}`, ...bkg }]);
    alert("Booking saved locally. Connect to a backend to accept bookings and payments.");
  }

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <Navbar onOpenCart={() => setCartOpen(true)} />
      <main>
        <Hero />
        <Section id="about" title="About Chipinge">
          <div className="prose max-w-none text-neutral-700">
            Chipinge Rise celebrates Chipinge — a highland town known for its tea and macadamia farms, beautiful
            vistas, and energetic youth projects. This site brings together tourism listings, stories from the
            community, and a small merch store to support local initiatives.
          </div>
        </Section>

        <Section id="tourism" title="Tourism">
          <TourismGrid />
        </Section>

        <Section id="youth" title="Youth & Community">
          <YouthSection />
        </Section>

        <Section id="bookings" title="Hotels & Lodges">
          <HotelsGrid onOpenBooking={(h) => setBookingHotel(h)} />
        </Section>

        <Section id="shop" title="Shop - Merch for a cause">
          <ShopGrid addToCart={addToCart} />
        </Section>

        <Section id="contact" title="Contact & Get Involved">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-neutral-700">Want to partner, host an event, or support youth projects? Reach out — we’d love to hear from you.</p>
              <form className="mt-4 grid gap-3" action={FORM_ACTION} method="POST" onSubmit={() => { alert('Message sent (demo)'); }}>
                <input name="name" placeholder="Your name" className="px-3 py-2 border rounded" />
                <input name="email" placeholder="Email" className="px-3 py-2 border rounded" />
                <textarea name="message" placeholder="Message" className="px-3 py-2 border rounded" rows={4}></textarea>
                <button type="submit" className="px-4 py-2 bg-teal-700 text-white rounded">Send Message</button>
              </form>
            </div>
            <div>
              <h4 className="font-semibold">Visit us</h4>
              <p className="text-sm text-neutral-600 mt-2">Map and directions coming soon. For partnerships, email: levi.raphael@outlook.com (placeholder)</p>
            </div>
          </div>
        </Section>

        <Footer />
      </main>

      {cartOpen && <Cart cart={cart} onClose={() => setCartOpen(false)} updateQty={updateQty} clearCart={clearCart} checkout={checkout} />}
      {bookingHotel && <BookingModal hotel={bookingHotel} onClose={() => setBookingHotel(null)} saveBooking={saveBooking} />}
    </div>
  );
}
