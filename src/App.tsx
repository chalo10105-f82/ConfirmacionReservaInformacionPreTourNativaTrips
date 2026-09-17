import { useState } from 'react';
import BookingConfirmation from './pages/BookingConfirmation';
import PreTourInfo from './pages/PreTourInfo';

type Page = 'confirmation' | 'pretour';

export default function App() {
  const [page, setPage] = useState<Page>('confirmation');

  return (
    <div>
      {/* Dev nav */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 z-50 flex gap-2 bg-black/80 text-white text-xs px-4 py-2 rounded-b-lg">
        <button
          className={`px-3 py-1 rounded ${page === 'confirmation' ? 'bg-[#dceb6b] text-black' : 'opacity-60'}`}
          onClick={() => setPage('confirmation')}
        >
          Reserva Confirmada
        </button>
        <button
          className={`px-3 py-1 rounded ${page === 'pretour' ? 'bg-[#dceb6b] text-black' : 'opacity-60'}`}
          onClick={() => setPage('pretour')}
        >
          Info Pre-Tour
        </button>
      </div>
      {page === 'confirmation' ? <BookingConfirmation /> : <PreTourInfo />}
    </div>
  );
}
