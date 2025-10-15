import React, { useState } from 'react';
import PageLayout from '../components/PageLayout';

export default function SizeGuide() {
  const [measurementSystem, setMeasurementSystem] = useState('inches'); // 'cm' or 'inches'

  const womensSizes = {
    headers: ['UK Size', 'Bust', 'Waist', 'Hips'],
    rows: [
      ['6', measurementSystem === 'cm' ? '80' : '31.5', measurementSystem === 'cm' ? '62' : '24.5', measurementSystem === 'cm' ? '87' : '34'],
      ['8', measurementSystem === 'cm' ? '84' : '33', measurementSystem === 'cm' ? '66' : '26', measurementSystem === 'cm' ? '91' : '36'],
      ['10', measurementSystem === 'cm' ? '88' : '34.5', measurementSystem === 'cm' ? '70' : '27.5', measurementSystem === 'cm' ? '95' : '37.5'],
      ['12', measurementSystem === 'cm' ? '92' : '36', measurementSystem === 'cm' ? '74' : '29', measurementSystem === 'cm' ? '99' : '39'],
      ['14', measurementSystem === 'cm' ? '96' : '38', measurementSystem === 'cm' ? '78' : '30.5', measurementSystem === 'cm' ? '103' : '40.5'],
      ['16', measurementSystem === 'cm' ? '100' : '39.5', measurementSystem === 'cm' ? '82' : '32.5', measurementSystem === 'cm' ? '107' : '42'],
    ]
  };

  const mensSizes = {
    headers: ['Size', 'Chest', 'Waist', 'Hips'],
    rows: [
      ['XS', measurementSystem === 'cm' ? '86-91' : '34-36', measurementSystem === 'cm' ? '71-76' : '28-30', measurementSystem === 'cm' ? '86-91' : '34-36'],
      ['S', measurementSystem === 'cm' ? '91-97' : '36-38', measurementSystem === 'cm' ? '76-81' : '30-32', measurementSystem === 'cm' ? '91-97' : '36-38'],
      ['M', measurementSystem === 'cm' ? '97-102' : '38-40', measurementSystem === 'cm' ? '81-86' : '32-34', measurementSystem === 'cm' ? '97-102' : '38-40'],
      ['L', measurementSystem === 'cm' ? '102-107' : '40-42', measurementSystem === 'cm' ? '86-91' : '34-36', measurementSystem === 'cm' ? '102-107' : '40-42'],
      ['XL', measurementSystem === 'cm' ? '107-112' : '42-44', measurementSystem === 'cm' ? '91-97' : '36-38', measurementSystem === 'cm' ? '107-112' : '42-44'],
      ['XXL', measurementSystem === 'cm' ? '112-117' : '44-46', measurementSystem === 'cm' ? '97-102' : '38-40', measurementSystem === 'cm' ? '112-117' : '44-46'],
    ]
  };

  const childrensSizes = {
    headers: ['Age', 'Height', 'Chest', 'Waist'],
    rows: [
      ['2-3', measurementSystem === 'cm' ? '98' : '38.5', measurementSystem === 'cm' ? '53' : '21', measurementSystem === 'cm' ? '51' : '20'],
      ['3-4', measurementSystem === 'cm' ? '104' : '41', measurementSystem === 'cm' ? '55' : '21.5', measurementSystem === 'cm' ? '53' : '21'],
      ['4-5', measurementSystem === 'cm' ? '110' : '43.5', measurementSystem === 'cm' ? '57' : '22.5', measurementSystem === 'cm' ? '55' : '21.5'],
      ['5-6', measurementSystem === 'cm' ? '116' : '45.5', measurementSystem === 'cm' ? '59' : '23', measurementSystem === 'cm' ? '57' : '22.5'],
      ['6-7', measurementSystem === 'cm' ? '122' : '48', measurementSystem === 'cm' ? '61' : '24', measurementSystem === 'cm' ? '59' : '23'],
      ['7-8', measurementSystem === 'cm' ? '128' : '50.5', measurementSystem === 'cm' ? '63' : '25', measurementSystem === 'cm' ? '61' : '24'],
    ]
  };

  const measurementInstructions = [
    {
      title: 'Bust/Chest',
      instructions: 'Measure around the fullest part of your chest, keeping the tape measure horizontal.'
    },
    {
      title: 'Waist',
      instructions: 'Measure around your natural waistline, at the narrowest part of your waist.'
    },
    {
      title: 'Hips',
      instructions: 'Measure around the fullest part of your hips, keeping the tape measure horizontal.'
    },
    {
      title: 'Height (Children)',
      instructions: 'Measure from the top of the head to the floor, standing straight against a wall.'
    }
  ];

  return (
    <PageLayout
      title="Size Guide"
      subtitle="Find your perfect fit with our comprehensive size guide"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Unit Toggle */}
        <div className="mb-8 flex justify-end">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium cursor-pointer rounded-l-lg ${
                measurementSystem === 'cm'
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
              onClick={() => setMeasurementSystem('cm')}
            >
              Centimeters
            </button>
            <button
              type="button"
              className={`px-4 py-2 text-sm font-medium cursor-pointer rounded-r-lg ${
                measurementSystem === 'inches'
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
              onClick={() => setMeasurementSystem('inches')}
            >
              Inches
            </button>
          </div>
        </div>

        {/* How to Measure */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">How to Measure</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {measurementInstructions.map((instruction, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-medium mb-2">{instruction.title}</h3>
                <p className="text-gray-600">{instruction.instructions}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Women's Sizes */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Women's Sizes</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  {womensSizes.headers.map((header, index) => (
                    <th
                      key={index}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {header} {index > 0 && `(${measurementSystem})`}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {womensSizes.rows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Men's Sizes */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Men's Sizes</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  {mensSizes.headers.map((header, index) => (
                    <th
                      key={index}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {header} {index > 0 && `(${measurementSystem})`}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {mensSizes.rows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Children's Sizes */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Children's Sizes</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden">
              <thead className="bg-gray-50">
                <tr>
                  {childrensSizes.headers.map((header, index) => (
                    <th
                      key={index}
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      {header} {index > 0 && `(${measurementSystem})`}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {childrensSizes.rows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Size Tips */}
        <section>
          <div className="bg-green-50 rounded-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Sizing Tips</h2>
            <ul className="space-y-3 text-gray-600">
              <li>• If you're between sizes, choose the larger size for a more comfortable fit</li>
              <li>• Take measurements over your underwear or lightweight clothing</li>
              <li>• Keep the measuring tape snug but not tight</li>
              <li>• If possible, have someone else take your measurements</li>
              <li>• For the most accurate results, use a fabric measuring tape</li>
            </ul>
          </div>
        </section>
      </div>
    </PageLayout>
  );
}