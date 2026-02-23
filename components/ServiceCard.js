export default function ServiceCard({ title, description, image, category }) {
  return (
    <div className="bg-gray-900 border-l-4 border-magenta rounded-xl overflow-hidden shadow-md group hover:shadow-xl transform hover:scale-105 transition-transform duration-300">
      <div className="w-full h-28 md:h-40 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="p-4">
        <span className="inline-block px-2 py-1 text-xs bg-gray-800 text-white rounded mb-2" style={{ borderLeft: '4px solid magenta' }}>{category}</span>
        <h3 className="text-lg font-semibold text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>{title}</h3>
        <p className="text-sm text-gray-200 mt-1">{description}</p>
      </div>
    </div>
  )
}
