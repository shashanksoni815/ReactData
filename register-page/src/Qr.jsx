import React, { useState } from 'react';
// import { QRCode } from 'qrcode.react';
import { QRCodeSVG } from 'qrcode.react';

export default function Qr() {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [qrValue, setQRValue] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateQR = (e) => {
    e.preventDefault();
    setQRValue(JSON.stringify(formData));
  };

  return (
    <div className="p-4">
      <form onSubmit={generateQR} className="space-y-4">
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          className="border p-2"
        />
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="border p-2"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Generate QR
        </button>
      </form>

      {qrValue && (
        <div className="mt-4">
          <QRCodeSVG value={qrValue} />
        </div>
      )}
    </div>
  );
}
