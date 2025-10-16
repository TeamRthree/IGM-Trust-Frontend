import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import API from '../../../api/api'; // your axios instance


const EventCalendar = () => {
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  const [selectedYear] = useState(new Date().getFullYear());
  const [startIndex, setStartIndex] = useState(0);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sendingOtp, setSendingOtp] = useState(false);
  const [verifying, setVerifying] = useState(false);
    const location = useLocation();

  // Modal & registration states
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
const [phone, setPhone] = useState('');

  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpMessage, setOtpMessage] = useState('');
  const [otpCountdown, setOtpCountdown] = useState(0);
  const [registrationMessage, setRegistrationMessage] = useState('');
  const [modalStep, setModalStep] = useState('email'); // 'email' | 'otp' | 'success' | 'registered'

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const eventsToShow = 2;

  useEffect(() => {
    if (events.length && location.hash) {
      const eventId = location.hash.replace('#event-', '');
      const event = events.find(e => e.id.toString() === eventId);
      if (event) {
        const eventDate = new Date(event.date);
        setSelectedMonth(eventDate.getMonth());
      }
    }
  }, [events, location.hash]);

  // Scroll after month and events are ready
  useEffect(() => {
    if (!loading && location.hash) {
      const element = document.getElementById(location.hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [loading, selectedMonth, location.hash]);

  // Fetch events
  const fetchEvents = async () => {
    try {
      setLoading(true);
      const response = await API.get('/events');
      setEvents(response.data);
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false);
    }
  };

const getEventsByMonth = () => {
  return events.filter(event => {
    const eventDate = new Date(event.date);
    return eventDate.getMonth() === selectedMonth && eventDate.getFullYear() === selectedYear;
  });
};


  useEffect(() => { fetchEvents(); }, []);

  useEffect(() => {
  setStartIndex(0); // reset carousel when month changes
}, [selectedMonth, selectedYear]);

 const filteredEvents = getEventsByMonth();

const prevEvents = () => setStartIndex((prev) => (prev - eventsToShow + filteredEvents.length) % filteredEvents.length);
const nextEvents = () => setStartIndex((prev) => (prev + eventsToShow) % filteredEvents.length);

const getVisibleEvents = () => {
  if (!filteredEvents.length) return [];
  const visible = [];
  const count = Math.min(eventsToShow, filteredEvents.length); // use actual number of events
  for (let i = 0; i < count; i++) {
    visible.push(filteredEvents[(startIndex + i) % filteredEvents.length]);
  }
  return visible;
};


const handleShare = (event) => {
  const eventUrl = `${window.location.origin}/contact#event-${event.id}`;
  const shareData = {
    title: event.title,
    text: `Check out this event: ${event.title} on ${formatDate(event.date)}`,
    url: eventUrl,
  };

  if (navigator.share) {
    navigator.share(shareData).catch((err) => console.error('Share failed:', err));
  } else {
    navigator.clipboard.writeText(eventUrl)
      .then(() => alert('Event link copied to clipboard!'))
      .catch(() => alert('Failed to copy link'));
  }
};




  // Helpers
  const getEventTypeColor = (type) => ({
    'Fundraising': 'bg-conversion-orange text-white',
    'Training': 'bg-primary text-white',
    'Exhibition': 'bg-secondary text-white',
    'Partnership': 'bg-accent text-white',
    'Community': 'bg-success text-white',
    'Workshop': 'bg-warning text-white'
  }[type] || 'bg-muted text-foreground');

  const getStatusColor = (status) => ({
    'open': 'text-success',
    'limited': 'text-warning',
    'almost-full': 'text-warning',
    'full': 'text-destructive'
  }[status] || 'text-muted-foreground');

  const getStatusText = (status) => ({
    'open': 'Open Registration',
    'limited': 'Limited Spots',
    'almost-full': 'Almost Full',
    'full': 'Registration Closed'
  }[status] || 'Available');

  const formatDate = (dateString) =>
    new Date(dateString).toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  const getProgressPercentage = (registered, capacity) => Math.min((registered / capacity) * 100, 100);

  // Registration handlers
  const handleRegister = (event) => {
    setSelectedEvent(event);
    setShowModal(true);
    setEmail('');
    setName('');
setPhone('');

    setOtp('');
    setOtpSent(false);
    setOtpMessage('');
    setOtpCountdown(0);
    setRegistrationMessage('');
    setModalStep('email');
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalStep('email');
    setEmail('');
    setName('');
setPhone('');

    setOtp('');
    setOtpSent(false);
    setOtpMessage('');
    setOtpCountdown(0);
    setRegistrationMessage('');
  };

  const sendOtp = async () => {
    if (!email) { setOtpMessage('Email is required'); return; }
    setSendingOtp(true);
    try {
      await API.post('/verify-email', { email, name, phone });
      setOtpSent(true);
      setOtpMessage(`OTP sent to ${email}`);
      setOtpCountdown(60);
      setModalStep('otp');

      const interval = setInterval(() => {
        setOtpCountdown(prev => {
          if (prev <= 1) { clearInterval(interval); return 0; }
          return prev - 1;
        });
      }, 1000);
    } catch (err) {
      setOtpMessage(err.response?.data?.message || 'Failed to send OTP');
    } finally { setSendingOtp(false); }
  };

  const confirmOtp = async () => {
  if (!otp) { setOtpMessage('Enter OTP'); return; }
  setVerifying(true);
  try {
    await API.post('/confirm-email', { email, otp });
    const response = await API.post(`/events/${selectedEvent.id}/register`, { email, name, phone });

    if (response.data.payment_required) {
      setRegistrationMessage(`Payment required: ${selectedEvent.price}`);
      setModalStep('success');
    } else if (response.data.already_registered) {
      setRegistrationMessage(response.data.message || 'You are already registered!');
      setModalStep('registered'); // ✅ only Close button
    } else {
      setRegistrationMessage(response.data.message || 'Registration successful!');
      // ✅ Refresh events after successful registration
      await fetchEvents();
      setModalStep('success');
    }

    setOtpSent(false);
    setOtp('');
  } catch (err) {
    setOtpMessage(err.response?.data?.message || 'OTP verification failed');
  } finally { setVerifying(false); }
};
  

  // Modal render
  const renderModal = () => (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-6 w-96 max-w-full text-center">

        {/* Email Step */}
{modalStep === 'email' && (
  <>
    <h3 className="font-bold text-lg mb-4">Register for {selectedEvent?.title}</h3>

    <input
      type="text"
      placeholder="Enter your full name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="w-full mb-2 px-4 py-2 border rounded"
    />
    <input
      type="text"
      placeholder="Enter your phone number"
      value={phone}
      onChange={(e) => setPhone(e.target.value)}
      className="w-full mb-2 px-4 py-2 border rounded"
    />
    <input
      type="email"
      placeholder="Enter your email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="w-full mb-2 px-4 py-2 border rounded"
    />

    <p className="text-sm text-muted-foreground mb-2">{otpMessage}</p>
    <Button
      className="w-full mb-2"
      onClick={sendOtp}
      disabled={!name || !phone || !email || otpCountdown > 0 || sendingOtp}
    >
      {sendingOtp ? 'Sending...' : otpCountdown > 0 ? `Resend OTP in ${otpCountdown}s` : 'Send OTP'}
    </Button>
    <Button className="w-full" variant="outline" onClick={handleCloseModal}>
      Cancel
    </Button>
  </>
)}


        {/* OTP Step */}
        {modalStep === 'otp' && (
          <>
            <h3 className="font-bold text-lg mb-4">Verify OTP for {selectedEvent?.title}</h3>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full mb-4 px-4 py-2 border rounded"
            />
            <p className="text-sm text-muted-foreground mb-2">{otpMessage}</p>
            <Button className="w-full mb-2" onClick={confirmOtp} disabled={verifying}>
              {verifying ? 'Verifying...' : 'Verify & Register'}
            </Button>
            <Button className="w-full mb-2" onClick={sendOtp} disabled={otpCountdown > 0}>
              {otpCountdown > 0 ? `Resend OTP in ${otpCountdown}s` : 'Resend OTP'}
            </Button>
            <Button className="w-full" variant="outline" onClick={handleCloseModal}>Cancel</Button>
          </>
        )}

        {/* Success Step */}
        {modalStep === 'success' && (
          <>
            <h3 className="font-bold text-lg mb-4">Registration Status</h3>
            <p className="mb-6">{registrationMessage}</p>
            <Button className="w-full" onClick={handleCloseModal}>Close</Button>
          </>
        )}

        {/* Already Registered Step */}
        {modalStep === 'registered' && (
          <>
            <h3 className="font-bold text-lg mb-4">Registration Status</h3>
            <p className="mb-6">{registrationMessage}</p>
            <Button className="w-full" variant="outline" onClick={handleCloseModal}>Close</Button>
          </>
        )}

      </div>
    </div>
  );

  if (loading) return <p className="text-center">Loading events...</p>;

  return (
    <section id='events' className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full">
              <Icon name="Calendar" size={24} color="var(--color-primary)" />
            </div>
          </div>
          <h2 className="font-heading font-bold text-3xl lg:text-4xl text-foreground mb-4">Upcoming Events</h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us at our upcoming events and be part of our mission to transform children's lives.
          </p>
        </div>

        {/* Month Navigation */}
        <div className="flex items-center justify-center space-x-4 mb-12">
          <Button variant="outline" size="sm" iconName="ChevronLeft" iconPosition="left" iconSize={16} onClick={() => setSelectedMonth(prev => prev > 0 ? prev - 1 : 11)}>Previous</Button>
          <div className="bg-card rounded-lg px-6 py-3 shadow-warm">
            <h3 className="font-heading font-semibold text-lg text-foreground">{months[selectedMonth]} {selectedYear}</h3>
          </div>
          <Button variant="outline" size="sm" iconName="ChevronRight" iconPosition="right" iconSize={16} onClick={() => setSelectedMonth(prev => prev < 11 ? prev + 1 : 0)}>Next</Button>
        </div>

        {/* Carousel Controls */}
        <div className="flex items-center justify-between mb-6">
          <Button 
  variant="outline" 
  size="sm" 
  iconName="ChevronLeft" 
  onClick={prevEvents} 
  disabled={filteredEvents.length <= eventsToShow}
>
  Previous Events
</Button>

<Button 
  variant="outline" 
  size="sm" 
  iconName="ChevronRight" 
  onClick={nextEvents} 
  disabled={filteredEvents.length <= eventsToShow}
>
  Next Events
</Button>

        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {getVisibleEvents().map(event => (
            <div key={event.id} id={`event-${event.id}`} className="bg-card rounded-xl shadow-warm p-8 hover:shadow-warm-hover transition-warm">
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-2">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${getEventTypeColor(event.type)}`}>{event.type}</span>
                    <span className={`text-sm font-medium ${getStatusColor(event.status)}`}>{getStatusText(event.status)}</span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2">{event.title}</h3>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <div className="flex items-center"><Icon name="Calendar" size={14} className="mr-2" />{formatDate(event.date)}</div>
                    <div className="flex items-center"><Icon name="Clock" size={14} className="mr-2" />{event.time}</div>
                    <div className="flex items-center"><Icon name="MapPin" size={14} className="mr-2" />{event.location}</div>
                  </div>
                </div>
              </div>
              <p className="font-body text-muted-foreground mb-6 leading-relaxed">{event.description}</p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <p className="font-body text-xs text-muted-foreground mb-1">Price</p>
                  <p className="font-body text-sm font-medium text-foreground">{event.price}</p>
                </div>
                <div>
                  <p className="font-body text-xs text-muted-foreground mb-1">Capacity</p>
                  <p className="font-body text-sm font-medium text-foreground">{event.registrations_count}/{event.capacity} registered</p>

                </div>
              </div>
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-body text-sm text-muted-foreground">Registration Progress</span>
                 <span className="font-body text-sm font-medium text-foreground">{Math.round(getProgressPercentage(event.registrations_count, event.capacity))}%</span>

                </div>
                <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full transition-warm" style={{ width: `${getProgressPercentage(event.registrations_count, event.capacity)}%` }} />

                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Button variant="default" size="sm" iconName="UserPlus" iconPosition="left" iconSize={16} disabled={event.status === 'full'} className="bg-primary hover:bg-primary/90 text-white flex-1" onClick={() => handleRegister(event)}>
                  {event.status === 'full' ? 'Registration Closed' : 'Register Now'}
                </Button>
                <Button
  variant="outline"
  size="sm"
  iconName="Share2"
  iconPosition="left"
  iconSize={16}
  className="border-primary text-primary hover:bg-primary hover:text-white"
  onClick={() => handleShare(event)}
>
  Share
</Button>


              </div>
            </div>
          ))}
        </div>
      </div>

      {showModal && renderModal()}

    </section>
  );
};

export default EventCalendar;
