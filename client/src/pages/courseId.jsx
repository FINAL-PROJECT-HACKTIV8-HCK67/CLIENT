import { Link } from "react-router-dom";

export default function CourseId() {
  return (
    <div>
      <div className="flex justify-between">
        <Link to="#" className="text-xl flex-auto ml-5 mt-5 btn btn-ghost">
          Lesson 1
        </Link>
        <Link
          to="#"
          className="text-xl flex-auto text-center mt-5 btn btn-ghost"
          style={{ marginLeft: "20px", marginRight: "20px" }}
        >
          Lesson 2
        </Link>
        <Link
          to="#"
          className="text-xl flex-auto text-center mt-5 btn btn-ghost"
        >
          Lesson 3
        </Link>
      </div>
      <div>
        <div className="hero h-screen bg-white">
          <div className="hero-content flex-col lg:flex-row -scroll-mt-2.5">
            <img
              src="https://www.fastretailing.com/eng/about/photolibrary/images/photolib_uqshinsaibashirl.jpg"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl text-black font-bold">Nama Materti</h1>
              <p className="py-6 text-black">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque
                ut soluta iste temporibus beatae inventore magnam accusamus
                exercitationem quia commodi, recusandae cum non, odit doloremque
                velit quae maxime praesentium rerum? Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Atque ut soluta iste temporibus
                beatae inventore magnam accusamus exercitationem quia commodi,
                recusandae cum non, odit doloremque velit quae maxime
                praesentium rerum?
              </p>
              <Link to={"/quiz/:id"}>
                <button className="btn btn-ghost text-black">Quiz!</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
