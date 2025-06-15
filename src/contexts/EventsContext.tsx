
import React, { createContext, useContext, useState } from 'react';

interface Event {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'wedding' | 'corporate' | 'birthday' | 'custom';
  date: string;
}

interface EventsContextType {
  events: Event[];
  addEvent: (event: Event) => void;
  updateEvent: (event: Event) => void;
  deleteEvent: (id: string) => void;
}

const EventsContext = createContext<EventsContextType>({
  events: [],
  addEvent: () => {},
  updateEvent: () => {},
  deleteEvent: () => {}
});

export const useEvents = () => {
  return useContext(EventsContext);
};

// Initial mock data
const initialEvents: Event[] = [
  {
    id: '1',
    title: 'Sarah & Michael\'s Wedding',
    description: 'A magical outdoor wedding ceremony with 200 guests. The event featured a stunning garden backdrop, live band performance, and a three-course dinner reception. The bride wore a vintage-inspired gown while the groom donned a classic black tuxedo.',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'wedding',
    date: 'December 15, 2024'
  },
  {
    id: '2',
    title: 'TechCorp Annual Gala',
    description: 'A sophisticated corporate event celebrating the company\'s 25th anniversary. Featured keynote speakers, awards ceremony, and networking dinner for 500+ attendees. The venue was decorated with modern lighting and tech-themed installations.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    category: 'corporate',
    date: 'November 20, 2024'
  },
  {
    id: '3',
    title: 'Emma\'s Sweet 16',
    description: 'A vibrant and colorful sweet sixteen celebration with a princess theme. The party included a DJ, photo booth, custom cake, and dance floor for 80 young guests. Decorations featured pink and gold accents throughout.',
    image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    category: 'birthday',
    date: 'October 10, 2024'
  },
  {
    id: '4',
    title: 'James & Lisa Anniversary',
    description: 'An intimate 25th wedding anniversary celebration with close family and friends. The evening featured a renewal of vows ceremony, live acoustic music, and a elegant dinner reception in a private venue.',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
    category: 'custom',
    date: 'September 5, 2024'
  }
];

export const EventsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [events, setEvents] = useState<Event[]>(initialEvents);

  const addEvent = (event: Event) => {
    setEvents(prev => [...prev, event]);
  };

  const updateEvent = (updatedEvent: Event) => {
    setEvents(prev => prev.map(event => 
      event.id === updatedEvent.id ? updatedEvent : event
    ));
  };

  const deleteEvent = (id: string) => {
    setEvents(prev => prev.filter(event => event.id !== id));
  };

  const value = {
    events,
    addEvent,
    updateEvent,
    deleteEvent
  };

  return (
    <EventsContext.Provider value={value}>
      {children}
    </EventsContext.Provider>
  );
};
