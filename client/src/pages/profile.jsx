const user = {
    name: 'Tony Simatupang',
    email: 'tompang@example.com',
    location: 'Cirebon',
    avatar: 'https://png.pngtree.com/png-clipart/20230308/ourmid/pngtree-cool-logo-with-retro-character-png-image_6639995.png',
};

export default function Profile() {
    return (
        <div className="max-w-md mx-auto bg-white shadow-md rounded-lg overflow-hidden">
            <div className="px-6 py-4">
                <div className="flex justify-center">
                    <img
                        className="h-24 w-24 rounded-full"
                        src={user.avatar}
                        alt={user.name}
                    />
                </div>
                <div className="text-center mt-4">
                    <h2 className="text-xl font-semibold">{user.name}</h2>
                    <p className="text-gray-600 text-sm">{user.email}</p>
                    <p className="text-gray-600 text-sm">{user.location}</p>
                </div>
            </div>
            <div className="px-6 py-4 flex justify-center">
                <a
                    href={`mailto:${user.email}`}
                    className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Send Email
                </a>
            </div>
        </div>
    )
}