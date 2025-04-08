"use client";

import React, { useState } from "react";
import { useCart } from "@/lib/context/cart-context";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CartPage() {
  const { cartItems, removeFromCart } = useCart();
  const [pagoRealizado, setPagoRealizado] = useState(false);
  const [tarjeta, setTarjeta] = useState("");
  const [cvv, setCvv] = useState("");

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  const handlePago = () => {
    setPagoRealizado(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 py-8 flex-grow">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Tu carrito
        </h1>

        {pagoRealizado ? (
          <div className="text-center text-green-600 text-xl font-semibold">
            ✅ ¡Pago realizado con éxito! Disfruta tu compra.
          </div>
        ) : cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Tu carrito está vacío.</p>
        ) : (
          <div className="flex flex-col lg:flex-row justify-center gap-8">
            {/* Lista de productos */}
            <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4 text-center">
                Lista de productos
              </h2>
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center border-b pb-2"
                  >
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p className="text-sm text-gray-500">{item.author}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold">${item.price}</p>
                      <Button
                        variant="ghost"
                        className="text-red-500 text-xs"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Eliminar
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 text-right font-bold text-lg">
                Total: ${total}
              </div>
            </div>

            {/* Método de pago */}
            <div className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-bold mb-4 text-center">
                Método de pago
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium block mb-1">
                    Tarjeta
                  </label>
                  <Input
                    placeholder="12345678910"
                    value={tarjeta}
                    onChange={(e) => setTarjeta(e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium block mb-1">CVV</label>
                  <Input
                    placeholder="***"
                    type="password"
                    value={cvv}
                    onChange={(e) => setCvv(e.target.value)}
                  />
                </div>
                <Button
                  className="w-full bg-black text-white mt-4"
                  onClick={handlePago}
                >
                  Comprar productos
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
