const user = {
    name: 'Tony Simatupang',
    email: 'tompang@example.com',
    location: 'Cirebon',
    credit: 50000,
    avatar: 'https://png.pngtree.com/png-clipart/20230308/ourmid/pngtree-cool-logo-with-retro-character-png-image_6639995.png',
    achievements: [
        "Completed Level 1",
        "Reached 100 Points",
        "Featured in Top 10",
        "Earned Gold Badge",
    ]
};

export default function Profile() {
    return (
        <div className="container mx-auto px-4" style={{backgroundColor : "#D5F0C1"}}>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-4 " >
                <div className="bg-white overflow-hidden shadow-xl sm:rounded-lg " style={{backgroundColor : "#F9F7C9"}}>
                    <div className="p-6 sm:px-10">
                        <div className="flex flex-col sm:flex-row items-center">
                            <div className="sm:mr-10 mb-6 sm:mb-0">
                                <img
                                    className="h-32 w-32 rounded-full object-cover"
                                    src={user.avatar}
                                    alt={user.name}
                                />
                            </div>
                            <div>
                                <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
                                <p className="text-gray-600 mt-2">{user.email}</p>
                                <p className="text-gray-600 mt-2">{user.location}</p>
                            </div>
                        </div>
                            <div className="mt-8">
                                <h2 className="text-xl font-bold text-gray-800">Credit</h2>
                                <p className="text-gray-600 mt-2">${user.credit}</p>
                            </div>
                        <div className="mt-8">
                            <h2 className="text-xl font-bold text-gray-800">Achievements</h2>
                            <ul className="list-disc list-inside mt-2">
                                {user.achievements.map((achievement, index) => (
                                    <li key={index} className="text-gray-600">
                                        {achievement}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}