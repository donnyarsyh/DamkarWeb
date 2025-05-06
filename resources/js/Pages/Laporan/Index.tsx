import React from 'react';
import { Head } from '@inertiajs/react';

export default function LaporanIndex() {
  const laporanData = [
    {
      id: 'ID-2024-001',
      jenis: 'Kebakaran',
      lokasi: 'Jl. Danau Toba No.12',
      pelapor: 'Budi Gunawan',
      noHP: '081236890567',
      waktu: '10.00 WIB',
      status: 'Menunggu',
      warna: 'bg-red-500',
      icon: 'fa-fire',
    },
    {
      id: 'ID-2024-001',
      jenis: 'Penyelamatan',
      lokasi: 'Jl. Danau Toba No.12',
      pelapor: 'Budi Gunawan',
      noHP: '081236890567',
      waktu: '10.00 WIB',
      status: 'Diproses',
      warna: 'bg-yellow-400',
      icon: 'fa-life-ring',
    },
    {
      id: 'ID-2024-001',
      jenis: 'Edukasi',
      lokasi: 'Jl. Danau Toba No.12',
      pelapor: 'Budi Gunawan',
      noHP: '081236890567',
      waktu: '10.00 WIB',
      status: 'Diproses',
      warna: 'bg-cyan-400',
      icon: 'fa-chalkboard-teacher',
    },
    // Tambah data lainnya jika diperlukan
  ];

  return (
    <div className="p-6 text-black">
      <Head title="Laporan" />

      <h1 className="text-2xl font-bold mb-6">Statistik Cepat</h1>

      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-[#2E316A] text-white p-4 rounded-xl">
          <p className="text-lg font-semibold">12 Laporan</p>
          <p className="text-sm">+2 dari kemarin</p>
        </div>
        <div className="bg-[#2E316A] text-white p-4 rounded-xl">
          <p className="text-lg font-semibold">5 Laporan Aktif</p>
          <p className="text-sm">3 Prioritas Tinggi</p>
        </div>
        <div className="bg-[#2E316A] text-white p-4 rounded-xl">
          <p className="text-lg font-semibold">1 Terdeteksi</p>
          <p className="text-sm">Laporan Palsu</p>
        </div>
        <div className="bg-[#2E316A] text-white p-4 rounded-xl">Grafik (dummy)</div>
      </div>

      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Cari ID, tanggal, nama pelapor..."
          className="flex-1 px-4 py-2 rounded-lg border"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Menunggu</button>
        <button className="bg-[#2E316A] text-white px-4 py-2 rounded-lg">Maret 2025</button>
        <button className="bg-[#2E316A] text-white px-4 py-2 rounded-lg">April 2025</button>
      </div>

      <div className="flex gap-4 mb-6">
        <button className="bg-red-500 text-white px-6 py-2 rounded-full font-semibold">Semua</button>
        <button className="bg-[#2E316A] text-white px-6 py-2 rounded-full">Kebakaran</button>
        <button className="bg-[#2E316A] text-white px-6 py-2 rounded-full">Penyelamatan</button>
        <button className="bg-[#2E316A] text-white px-6 py-2 rounded-full">Edukasi</button>
      </div>

      <table className="min-w-full bg-white text-sm rounded-xl overflow-hidden">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3">ID Laporan</th>
            <th className="p-3">Jenis</th>
            <th className="p-3">Lokasi</th>
            <th className="p-3">Pelapor</th>
            <th className="p-3">No HP</th>
            <th className="p-3">Waktu Lapor</th>
            <th className="p-3">Status</th>
            <th className="p-3">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {laporanData.map((laporan, index) => (
            <tr key={index} className="border-t">
              <td className="p-3">{laporan.id}</td>
              <td className="p-3">
                <span className={`inline-flex items-center gap-2 ${laporan.warna} text-white px-3 py-1 rounded-full`}>
                  <i className={`fas ${laporan.icon}`}></i>
                  {laporan.jenis}
                </span>
              </td>
              <td className="p-3">{laporan.lokasi}</td>
              <td className="p-3">{laporan.pelapor}</td>
              <td className="p-3">{laporan.noHP}</td>
              <td className="p-3">{laporan.waktu}</td>
              <td className="p-3">{laporan.status}</td>
              <td className="p-3">
                <button className="flex items-center gap-2 border px-3 py-1 rounded-full text-sm">
                  <i className="fas fa-eye"></i> Lihat Detail
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
