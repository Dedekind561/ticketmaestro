import EventCard from './EventCard.jsx';

async function fetchEvents({ query }) {
  return fetch(
    `https://app.ticketmaster.com/discovery/v2/events.json?size=10&apikey=${process.env.TICKETMASTER_API_KEY}&countryCode=GB&keyword=${query}&dmaId=605&endDate=2024-08-30`,
  ) // Returns a promise, await async does this under the hood
    .then(function (response) {
      return response.json();
    })
    .then(function (jsonObject) {
      // console.log(jsonObject._embedded.events,'<-- events');
      // console.log(jsonObject._embedded.events.pop()._embedded.venues.pop(),'<-- venue');
      return jsonObject._embedded.events;
    });
}

export default async function EventList({ query }) {
  const events_ = await fetchEvents({ query });

  let events = events_.map((item) => {
    let venue = item._embedded.venues.pop();
    return {
      id: item.id,
      name: item.name,
      month: new Date(item.dates.start.localDate).toLocaleString('default', { month: 'short' }),
      day: new Date(item.dates.start.localDate).getDate(),
      time: item.dates.start.localTime,
      location: venue && venue.city.name,
      venue: venue && venue.name,
      url: item.url,
    };
  });
  return (
    <div className="event-list">
      {events.map((event) => (
        <EventCard key={event.id} {...event} />
      ))}
    </div>
  );
}
