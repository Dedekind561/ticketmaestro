'use client';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

export default function SearchBar() {
  const searchParams = useSearchParams();
  // A client component hook that lets you read the current URL's search parameters
  const pathname = usePathname();
  // A client component hook that lets you read the current URL's pathname.
  const { replace } = useRouter();
  // navigate to the provided href. Replaces the current history entry.

  function handleSubmit(formData) {
    const query = formData.get('query');
    // grab query string from form input
    const params = new URLSearchParams(searchParams);
    // create new instance of URLSearchParams

    params.set('q', query);
    // set the url search params
    replace(`${pathname}?${params.toString()}`);
    // navigate to the url with the provided query string
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
