import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

const Checkout = () => {
    const { propertyId } = useParams();
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.checkout);
    
    const [renterInfo, setRenterInfo] = useState({ fullName: '', contact: '' });
    const [moveInDate, setMoveInDate] = useState('');
    const [rentalDuration, setRentalDuration] = useState('');

    const handleRequest = async (e) => {
        e.preventDefault();        
        try {
            // Simulate sending the request
            setTimeout(() => {
                toast.success('Request sent successfully to the landlord!');
                // Reset the form after submission
                setRenterInfo({ fullName: '', contact: '' });
                setMoveInDate('');
                setRentalDuration('');
            }, 1000);
        } catch (err) {
            toast.error('Error sending the request.');
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">Contact the Landlord</h2>
            <form onSubmit={handleRequest} className="bg-white p-6 rounded shadow-md">
                <div>
                    <label className="block mb-2">Full Name</label>
                    <input
                        type="text"
                        value={renterInfo.fullName}
                        onChange={(e) => setRenterInfo({ ...renterInfo, fullName: e.target.value })}
                        className="border border-gray-300 rounded p-2 w-full mb-4"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-2">Contact Number</label>
                    <input
                        type="text"
                        value={renterInfo.contact}
                        onChange={(e) => setRenterInfo({ ...renterInfo, contact: e.target.value })}
                        className="border border-gray-300 rounded p-2 w-full mb-4"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-2">Move-in Date</label>
                    <input
                        type="date"
                        value={moveInDate}
                        onChange={(e) => setMoveInDate(e.target.value)}
                        className="border border-gray-300 rounded p-2 w-full mb-4"
                        required
                    />
                </div>
                <div>
                    <label className="block mb-2">Rental Duration (in months)</label>
                    <input
                        type="number"
                        value={rentalDuration}
                        onChange={(e) => setRentalDuration(e.target.value)}
                        className="border border-gray-300 rounded p-2 w-full mb-4"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                    disabled={loading}
                >
                    {loading ? 'Sending...' : 'Send Request'}
                </button>

                {error && <p className="text-red-500">{error}</p>}
            </form>
        </div>
    );
};

export default Checkout;