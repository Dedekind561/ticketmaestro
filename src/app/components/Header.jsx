import SearchBar from './SearchBar';

export default function Header() {
  return (
    <header>
      <div className="topbar">
        <div className="logo">Ticketmaestro</div>
        <div className="navigation">
          <ol>
            <li>
              <a href="#">Music</a>
            </li>
            <li>
              <a href="#">Sport</a>
            </li>
            <li>
              <a href="#">Arts, Theatre & Comedy</a>
            </li>
            <li>
              <a href="#">Family & Attractions</a>
            </li>
          </ol>
        </div>
        <div className="profile">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
          </svg>
        </div>
      </div>
      <SearchBar />
    </header>
  );
}
