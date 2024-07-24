import EventList from './components/EventList.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

export default function Page({ searchParams }) {
  const query = searchParams.q || '';
  return (
    <section>
      <Header />
      <EventList query={query} />
      <Footer />
    </section>
  );
}
