import React, { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Textarea } from "./components/ui/textarea";
import { Mail, Instagram, Heart, Facebook, Video, CreditCard } from "lucide-react";
import { motion } from "framer-motion";

const samplePapillons = [
  { id: "papillon-1", title: "Papillon Aurore", price: 45, img: "/placeholder-papillon-1.jpg" },
  { id: "papillon-2", title: "Papillon Prismatique", price: 65, img: "/placeholder-papillon-2.jpg" },
  { id: "papillon-3", title: "Papillon Tartanpion (Éd.)", price: 80, img: "/placeholder-papillon-3.jpg" }
];
const samplePaintings = [];
const sampleSculptures = [];

export default function NocensSite() {
  const [cart, setCart] = useState([]);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const addToCart = (product) => setCart((prev) => [...prev, product]);
  const removeFromCart = (index) => setCart((prev) => prev.filter((_, i) => i !== index));
  const getTotal = () => cart.reduce((sum, item) => sum + item.price, 0);

  const redirectPayPal = (item) => {
    const baseUrl = 'https://www.paypal.me/PatrickRohr';
    const amount = item ? item.price : '';
    window.open(`${baseUrl}/${amount}`, '_blank');
  };

  const redirectGoFundMe = () => {
    window.open('https://www.gofundme.com/f/justine-assassinee-a-saintanselme', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-blue-50 text-gray-800">
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="rounded-full w-12 h-12 bg-gradient-to-br from-pink-300 via-yellow-200 to-indigo-300 flex items-center justify-center shadow-lg">
            <Heart className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold">Nocens</h1>
            <p className="text-sm text-gray-600">Art & créations — Paiement et dons via PayPal</p>
          </div>
        </div>
        <nav className="flex gap-4 items-center">
          <a href="#papillons" className="text-sm hover:underline">Papillons</a>
          <a href="#paintings" className="text-sm hover:underline">Peintures</a>
          <a href="#sculptures" className="text-sm hover:underline">Sculptures</a>
          <a href="#payment" className="text-sm hover:underline">Paiement</a>
          <a href="#don" className="text-sm hover:underline">Faire un don</a>
          <a href="#gofundme" className="text-sm hover:underline">GoFundMe</a>
          <a href="#contact" className="text-sm hover:underline">Contact</a>
          <Button className="ml-4">Panier ({cart.length})</Button>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-6 pb-24">
        <ProductSection title="Papillons d’Espérance" products={samplePapillons} addToCart={addToCart} redirectPayPal={redirectPayPal} />
        <ProductSection title="Peintures" products={samplePaintings} addToCart={addToCart} redirectPayPal={redirectPayPal} />
        <ProductSection title="Sculptures" products={sampleSculptures} addToCart={addToCart} redirectPayPal={redirectPayPal} />

        <section id="payment" className="py-8 bg-white rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><CreditCard className="w-6 h-6" /> Paiement</h2>
          <p className="text-gray-700 mb-4">Total du panier : {getTotal()}€</p>
          <Button onClick={() => redirectPayPal()}>Payer avec PayPal</Button>
        </section>

        <section id="don" className="py-8 bg-indigo-50 rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Faire un don</h2>
          <p className="text-gray-700 mb-4">Soutenez Patrick Rohr via PayPal.</p>
          <Button onClick={() => redirectPayPal()}>Faire un don</Button>
        </section>

        <section id="gofundme" className="py-8 bg-yellow-50 rounded-lg p-6 shadow-sm">
          <h2 className="text-2xl font-bold mb-4">Soutenir Justine</h2>
          <p className="text-gray-700 mb-4">Vous pouvez soutenir la cause via GoFundMe :</p>
          <a href="https://www.gofundme.com/f/justine-assassinee-a-saintanselme" target="_blank" className="text-blue-600 underline">https://www.gofundme.com/f/justine-assassinee-a-saintanselme</a>
          <div className="mt-4">
            <Button onClick={redirectGoFundMe}>Aller sur GoFundMe</Button>
          </div>
        </section>

        <section id="contact" className="py-8">
          <h3 className="text-2xl font-bold mb-3">Contact</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <p className="text-gray-700">Pour commandes, collaborations ou questions.</p>
              <div className="flex items-center gap-3"><Mail className="w-5 h-5 text-gray-600" /> contact@nocens.example</div>
              <div className="flex items-center gap-3"><Instagram className="w-5 h-5 text-gray-600" /> <a href="https://www.instagram.com/patrick.nocens/" target="_blank" className="underline">@patrick.nocens</a></div>
              <div className="flex items-center gap-3"><Facebook className="w-5 h-5 text-gray-600" /> <a href="https://www.facebook.com/Patrick.Rohr" target="_blank" className="underline">Patrick Rohr</a></div>
              <div className="flex items-center gap-3"><Video className="w-5 h-5 text-gray-600" /> <a href="https://www.tiktok.com/@nocenslowo" target="_blank" className="underline">@nocenslowo</a></div>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); alert('Message envoyé (démo)'); }} className="space-y-3">
              <Input placeholder="Nom" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              <Input placeholder="Email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
              <Textarea placeholder="Message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
              <div className="flex gap-2">
                <Button type="submit">Envoyer</Button>
                <Button type="button" onClick={() => setForm({name:'',email:'',message:''})}>Effacer</Button>
              </div>
            </form>
          </div>
        </section>

        <footer className="mt-12 py-8 text-center text-gray-600">
          © {new Date().getFullYear()} Nocens — Art & créations. Paiement et dons via PayPal.
        </footer>
      </main>
    </div>
  );
}

function ProductSection({ title, products, addToCart, redirectPayPal }) {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <Card key={p.id} className="hover:scale-[1.01] transition-transform">
            <img src={p.img} alt={p.title} className="w-full h-44 object-cover rounded-t-md" />
            <CardContent>
              <h4 className="font-semibold text-lg">{p.title}</h4>
              {p.details && <p className="text-sm text-gray-600">{p.details}</p>}
              <div className="mt-4 flex items-center justify-between">
                <div className="text-lg font-bold">{p.price}€</div>
                <div className="flex gap-2">
                  <Button onClick={() => addToCart(p)}>Ajouter</Button>
                  <Button onClick={() => redirectPayPal(p)}>Payer</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}