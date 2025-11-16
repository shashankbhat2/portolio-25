interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  description: string;
  tags?: string[];
}

export default function ExperienceCard({ 
  company, 
  role, 
  period, 
  description,
  tags 
}: ExperienceCardProps) {
  return (
    <div className="group relative">
      <div className="absolute -inset-2 bg-gradient-to-r from-indigo-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative bg-white border border-gray-200 rounded-2xl p-6 hover:border-indigo-300 hover:shadow-lg transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{company}</h3>
            <p className="text-gray-600 text-sm">{role}</p>
          </div>
          <span className="text-gray-500 text-sm mt-2 sm:mt-0">{period}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">{description}</p>
        
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span 
                key={index}
                className="text-xs px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 border border-indigo-200"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
