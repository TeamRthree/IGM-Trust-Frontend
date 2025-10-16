import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import utc from 'dayjs/plugin/utc';

dayjs.extend(relativeTime);
dayjs.extend(utc);

const DonationPopup = ({ donation, onClose }) => {
  useEffect(() => {
    if (!donation) return;

    const timer = setTimeout(() => {
      onClose();
    }, 5000); // auto-close after 5s

    return () => clearTimeout(timer);
  }, [donation, onClose]);

  if (!donation) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: 300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 300, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30, duration: 0.5 }}
        className="fixed bottom-6 right-6 bg-white text-gray-900 p-4 rounded-lg border-b-2 border-green-500 shadow-md z-50"
        style={{ minWidth: '270px', maxWidth: '320px' }}
      >
        <p className="text-sm font-semibold">
          {donation.donor_first_name} donated ₹{donation.amount}
        </p>
        <p className="text-xs text-gray-500 mt-1">
          {donation.created_at
            ? dayjs.utc(donation.created_at).local().fromNow()
            : 'just now'}
        </p>
      </motion.div>
    </AnimatePresence>
  );
};

export default DonationPopup;
