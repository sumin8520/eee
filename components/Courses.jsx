import Link from 'next/link'

const Courses = async ({ courses }) => {
  return (
    <div className="grid-1 ">
      {courses?.map((course) => (
        <div
          key={course.id}
          className="bg-blue-200 p-4 m-4 rounded-lg font-bold"
        >
          <h2>{course.title}</h2>
          <p className=" font-normal">
            <small>Level: {course.level}</small>
          </p>
          <p className="font-normal mb-4">{course.description}</p>
          <Link
            href={course.link}
            target="_blank"
            className="py-2 px-4 bg-blue-700 hover:bg-blue-800 text-white rounded-lg mb-4"
          >
            Go To Course
          </Link>
        </div>
      ))}
    </div>
  )
}
export default Courses
