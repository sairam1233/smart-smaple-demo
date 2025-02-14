// src/config.js

const config = {
  // Meta Information
  meta: {
    title: "Alex & Sam's Wedding", // Updated title
    description: "We are getting married and would love for you to celebrate with us.", // Updated description
    ogImage: "/images/og-image.jpg", // OpenGraph image for social media
    favicon: "/images/favicon.ico",
  },

  couple: {
    groomName: "Alex", // Updated groom name
    brideName: "Sam", // Updated bride name
  },

  // Event Details
  event: {
    date: "2025-12-25", // Event date
    time: "16:22", // Event start time
    timezone: "WIB", // Timezone
    dateTime: "2025-12-25", // ISO 8601 format (exact date and time)
    name: "Grand Ballroom, Hotel Majesty", // Event venue
    address: "Jl. Example Street No. 123, City Name", // Venue address
    time: "4:16 - 5:30PM", // Event start and end time
    phone: "+62 123 4567 890", // Contact phone number
    maps_url: "https://maps.google.com/?q=YourVenueLocation", // Link to map for the venue
    maps_embed: "https://www.google.com/maps/embed?pb=your-map-embed-url", // Embed code for venue map
    latitude: -6.2088, // Venue latitude
    longitude: 106.8456, // Venue longitude
  },

  eventDetails: [{
    title: "Wedding Ceremony", // Event title
    date: "2024-12-24", // Date
    startTime: "4:16", // Start time
    endTime: "5:30PM", // End time
    timeZone: "Asia/Jakarta", // Timezone
    location: "Grand Ballroom, Hotel Majesty", // Location
    description: "Join us as we celebrate our wedding ceremony." // Description
  }, {
    title: "Wedding Reception", // Event title
    date: "2024-12-24", // Date
    startTime: "06:00", // Start time
endTime: "08:00PM",   // End time
    timeZone: "Asia/Jakarta", // Timezone
    location: "Grand Ballroom, Hotel Majesty", // Location
    description: "Celebrate with us at our wedding reception." // Description
  }],

  audio: {
    src: "/audio/backsound.mp3", // Audio source
    title: "Serene Melody", // Audio title
    artist: "Nasheed", // Artist name
    autoplay: true, // Autoplay
    loop: true, // Loop
    toastDuration: 5000, // Duration for toast messages
    pauseOnInactive: true, // Pause when inactive
    resumeOnReturn: true, // Resume on return
  },
  qris: {
    image: "https://ypp.co.id/site/uploads/qris/5f7c6da47a380-qr-code-dana.jpg" // QR code image URL
  }
};

export default config;
