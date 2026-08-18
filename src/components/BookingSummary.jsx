import dubai2 from "../assets/dubai2.avif";

const BookingSummary = ({ item }) => {
    return (
        <div className="h-fit overflow-hidden rounded-2xl bg-white shadow-sm">

            {/* Image */}

            <img
                src={item?.image || dubai2}
                alt={item?.title || "Travel destination"}
                className="h-72 w-full object-cover"
            />

            <div className="p-8">

                {/* Category */}

                {item?.category && (
                    <p className="font-medium text-blue-600">
                        {item.category}
                    </p>
                )}

                {/* Title */}

                <h2 className="mt-2 text-3xl font-bold text-slate-900">
                    {item?.title || "Travel Booking"}
                </h2>

                {/* Destination */}

                {item?.destination && (
                    <p className="mt-2 text-slate-500">
                        📍 {item.destination}
                    </p>
                )}

                {/* Details */}

                <div className="mt-6 space-y-4">

                    {item?.duration && (
                        <div className="flex items-center justify-between">
                            <span className="text-slate-500">
                                Duration
                            </span>

                            <span className="font-semibold">
                                {item.duration}
                            </span>
                        </div>
                    )}

                    {item?.price && (
                        <div className="flex items-center justify-between">
                            <span className="text-slate-500">
                                Price
                            </span>

                            <span className="font-semibold text-blue-600">
                                {(item.price).toLocaleString()}
                            </span>
                        </div>
                    )}

                </div>

            </div>
        </div>
    );
};

export default BookingSummary;