import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProperty } from '../redux/propertySlice';
import map from '../assets/map.png';
import axios from 'axios';

const AddProperty = () => {
    const dispatch = useDispatch();
    const [property, setProperty] = useState({
        title: '',
        description: '',
        price: '',
        location: { address: '', city: '' },
        images: [],
        amenities: [],
        propertyType: 'house',
        transactionType: 'sale',
        bedrooms: '',
        bathrooms: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        if (name.startsWith('location.')) {
            const key = name.split('.')[1];
            setProperty((prev) => ({
                ...prev,
                location: { ...prev.location, [key]: value },
            }));
        } else if (name === 'amenities') {
            setProperty((prev) => ({
                ...prev,
                amenities: value.split(',').map(item => item.trim()),
            }));
        } else {
            setProperty((prev) => ({
                ...prev,
                [name]: value,
            }));
        }
    };

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setProperty((prev) => ({
            ...prev,
            images: files,
        }));
    };

    const uploadImages = async (images) => {
        const urls = [];
        const cloudinaryUrl = 'https://api.cloudinary.com/v1_1/dtddfsmac/image/upload';
        const uploadPreset = 'Gojoye'; // Replace with your upload preset

        for (const image of images) {
            const formData = new FormData();
            formData.append('file', image);
            formData.append('upload_preset', uploadPreset);

            try {
                const response = await axios.post(cloudinaryUrl, formData);
                urls.push(response.data.secure_url); // Push the returned URL
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        }
        return urls;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const imageUrls = await uploadImages(property.images); // Upload images and get URLs

            const propertyData = {
                ...property,
                images: imageUrls,
            };

            dispatch(addProperty(propertyData)); // Dispatch property data with image URLs
            setProperty({
                title: '',
                description: '',
                price: '',
                location: { address: '', city: '' },
                images: [],
                amenities: [],
                propertyType: 'house',
                transactionType: 'sale',
                bedrooms: '',
                bathrooms: '',
            });
        } catch (error) {
            console.error('Error adding property:', error.message);
        }
    };

    return (
        <div className="mt-10">
            <h2 className="text-2xl font-bold mb-4 text-primary">Property Add</h2>
            <div className="flex items-center justify-center gap-4 my-4 p-4">
                <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded">
                    <input type="text" name="title" value={property.title} onChange={handleChange} placeholder="Title" required className="w-full p-2 mb-4 border rounded" />
                    <textarea name="description" value={property.description} onChange={handleChange} placeholder="Description" required className="w-full p-2 mb-4 border rounded" />
                    <input type="number" name="price" value={property.price} onChange={handleChange} placeholder="Price" required className="w-full p-2 mb-4 border rounded" />
                    <input type="text" name="location.address" value={property.location.address} onChange={handleChange} placeholder="Address" required className="w-full p-2 mb-4 border rounded" />
                    <input type="text" name="location.city" value={property.location.city} onChange={handleChange} placeholder="City" required className="w-full p-2 mb-4 border rounded" />
                    <input type="number" name="bedrooms" value={property.bedrooms} onChange={handleChange} placeholder="Bedrooms" required className="w-full p-2 mb-4 border rounded" />
                    <input type="number" name="bathrooms" value={property.bathrooms} onChange={handleChange} placeholder="Bathrooms" required className="w-full p-2 mb-4 border rounded" />
                    <select name="propertyType" value={property.propertyType} onChange={handleChange} required className="w-full p-2 mb-4 border rounded">
                        <option value="house">House</option>
                        <option value="apartment">Apartment</option>
                        <option value="condominium">Condominium</option>
                    </select>
                    <select name="transactionType" value={property.transactionType} onChange={handleChange} required className="w-full p-2 mb-4 border rounded">
                        <option value="sale">Sale</option>
                        <option value="rent">Rent</option>
                    </select>
                    <input type="file" name="images" multiple onChange={handleImageChange} className="w-full p-2 mb-4 border rounded" />
                    <input type="text" name="amenities" value={property.amenities.join(', ')} onChange={handleChange} placeholder="Amenities (comma separated)" className="w-full p-2 mb-4 border rounded" />
                    <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600">Add Property</button>
                </form>
                <div className="bg-[#CBE4E8] hidden md:block">
                    <img src={map} alt="Map"/>
                    <img src={map} alt="Map"/>
                </div>
            </div>
        </div>
    );
};

export default AddProperty;