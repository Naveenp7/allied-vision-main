import { Layout } from '@/components/layout/layout';
import { motion } from 'framer-motion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { foundersData, type Founder } from '@/data/founders';

const Founders = () => {

  return (
    <Layout>
      <div className="min-h-screen pt-32 pb-16 bg-gradient-to-b from-[#0F172A] to-[#1E293B] relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMxMjI0M2IiIGQ9Ik0zNiAxOGgtMnYyaDJ6TTMwIDZoLTJ2MmgyeiIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center space-y-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold font-sora text-white tracking-wider uppercase drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" style={{ letterSpacing: '0.05em' }}>
              Our Team
            </h1>
            <p className="text-lg max-w-2xl mx-auto text-blue-200/80">
              Meet the passionate individuals building the future of AI-powered applications and digital experiences.
            </p>
          </motion.div>

          {/* Team Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {foundersData.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative rounded-2xl p-8 bg-gradient-to-br ${founder.gradientFrom} ${founder.gradientTo} min-h-[280px] flex flex-col justify-between overflow-hidden`}
              >
                {/* Background pattern overlay */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
                  <div className="absolute bottom-4 left-4 w-20 h-20 bg-white/5 rounded-full blur-lg"></div>
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Quote */}
                  <blockquote className="text-white text-lg leading-relaxed mb-8 font-medium">
                    "{founder.quote}"
                  </blockquote>
                  
                  {/* Founder Info */}
                  <div className="flex items-center gap-4">
                    <Avatar className="w-24 h-24 border-2 border-white/20 shadow-lg flex-shrink-0">
                      <AvatarImage src={founder.avatar} alt={founder.name} />
                      <AvatarFallback className="bg-white/10 text-white text-lg">
                        {founder.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                      </AvatarFallback>
                    </Avatar>

                    <div>
                      <h3 className="text-white text-xl font-bold font-sora mb-1">
                        {founder.name}
                      </h3>
                      <p className="text-white/80 text-sm font-medium">
                        {founder.role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Team Members Section */}
          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <p className="text-blue-200/60 text-sm">
              Want to join our team? We're always looking for talented individuals passionate about AI and innovation.
            </p>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
};

export default Founders;
