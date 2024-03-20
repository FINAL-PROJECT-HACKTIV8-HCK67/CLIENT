const leaderboardData = [
    { rank: 1, name: 'John Doe', score: 350 },
    { rank: 2, name: 'Jane Smith', score: 320 },
    { rank: 3, name: 'Alice Johnson', score: 300 },
    { rank: 4, name: 'Bob Williams', score: 280 },
    { rank: 5, name: 'Eva Brown', score: 260 },
];
export default function LeaderBoard() {
    return (
        <div className="w-full max-w-md mx-auto">
            <div className="bg-white shadow-md rounded-lg overflow-hidden ">
                <div className="bg-green-100  px-4 py-2 font-bold">Leaderboard</div>
                <ul>
                    {leaderboardData.map((player) => (
                        <li key={player.rank} className="border-b border-gray-200">
                            <div className="bg-yellow-50 flex items-center justify-between px-4 py-3">
                                <div className="flex items-center">
                                    <span className="font-semibold mr-2">{player.rank}.</span>
                                    <span>{player.name}</span>
                                </div>
                                <span className="text-gray-600">{player.score} pts</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}