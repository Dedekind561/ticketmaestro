'use client';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function SearchBar() {
  function handleSubmit(formData) {
    console.log('MMMM');
    console.log(formData);
  }

  return (
    <div className="search-container">
      <div className="search">
        <form action={handleSubmit} className="search-form">
          <input name="query" type="text" />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}
