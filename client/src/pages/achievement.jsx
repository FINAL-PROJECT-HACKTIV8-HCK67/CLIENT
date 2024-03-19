export default function Achievement() {
  const achievements = [
    {
      title: "achievements 1",
      description: "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING.",
      logo: "https://wallpapercave.com/wp/wp7163696.png",
    },
    {
      title: "achievements 2",
      description: "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING.",
      logo: "https://wallpapercave.com/wp/wp7163696.png",
    },
    {
      title: "achievements 3",
      description: "LOREM IPSUM DOLOR SIT AMET CONSECTETUR ADIPISICING.",
      logo: "https://wallpapercave.com/wp/wp7163696.png",
    },
  ];

  return (
    <div className="container mx-auto px-4 bg-amber-100 ">
      <h1 className="text-3xl font-bold text-center mt-8 mb-4">
        YOUR ACHIEVEMENT
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:flex md:flex-col">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className=" bg-yellow-50 rounded-lg shadow-md p-6 flex items-center max-w-lg flex-wrap justify-center"
          >
            <img
              src={achievement.logo}
              alt={achievement.title}
              className="w-20 h-20 mr-5"
              objectFit="contain"
            />
            <div>
              <h2 className="text-lg font-semibold mb-2">
                {achievement.title}
              </h2>
              <p className="mb-4">{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
