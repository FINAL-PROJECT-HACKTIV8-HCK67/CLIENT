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
                    <div className="text-center mt-4">
                        <p className="text-gray-600 text-sm font-semibold">CREDITS</p>
                        <p className="text-gray-600 text-sm">$ {user.credit}</p>
                    </div>
                </div>
            </div>
            <div className="px-6 py-4 flex justify-center">
                <a
                    href='#'
                    className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    EDIT
                </a>
            </div>
            <div className="mt-4 ">
                <h3 className="text-lg font-semibold text-center flex justify-center">Achievements</h3>
                <ul className="mt-2">
                    {user.achievements.map((achievement, index) => (
                        <li key={index} className="text-gray-600 text-sm">
                            {achievement}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}