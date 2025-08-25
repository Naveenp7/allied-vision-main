import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const cards = [
  {
    id: 1,
    title: "Building solutions that can grow and adapt to meet evolving business needs.",
    tag: "Scalable",
    gradient: "from-purple-600 via-orange-500 to-orange-400"
  },
  {
    id: 2,
    title: "Focused on real-world applications that make a meaningful difference in people's lives.",
    tag: "Problem Solving", 
    gradient: "from-orange-600 via-purple-500 to-blue-500"
  },
  {
    id: 3,
    title: "Innovative technology solutions designed to transform how businesses operate and grow.",
    tag: "Innovation",
    gradient: "from-blue-600 via-teal-500 to-green-400"
  }
];

export const Features = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.7", "end 0.2"]
  });

  // Optimized scroll progress ranges for smoother transitions
  const card1Progress = useTransform(scrollYProgress, [0, 0.33], [0, 1]);
  const card1Y = useTransform(card1Progress, [0, 1], [0, -150]);
  const card1Scale = useTransform(card1Progress, [0, 0.7, 1], [1, 0.98, 0.94]);
  const card1Opacity = useTransform(card1Progress, [0, 0.5, 1], [1, 0.8, 0.4]);
  const card1RotateX = useTransform(card1Progress, [0, 1], [0, -12]);

  const card2Progress = useTransform(scrollYProgress, [0.2, 0.66], [0, 1]);
  const card2Y = useTransform(card2Progress, [0, 1], [0, -150]);
  const card2Scale = useTransform(card2Progress, [0, 0.7, 1], [1, 0.98, 0.94]);
  const card2Opacity = useTransform(card2Progress, [0, 0.5, 1], [1, 0.8, 0.4]);
  const card2RotateX = useTransform(card2Progress, [0, 1], [0, -12]);

  const card3Progress = useTransform(scrollYProgress, [0.4, 1], [0, 1]);
  const card3Y = useTransform(card3Progress, [0, 1], [0, -150]);
  const card3Scale = useTransform(card3Progress, [0, 0.7, 1], [1, 0.98, 0.94]);
  const card3Opacity = useTransform(card3Progress, [0, 0.5, 1], [1, 0.8, 0.4]);
  const card3RotateX = useTransform(card3Progress, [0, 1], [0, -12]);

  // Array of transforms for easy access by index
  const cardTransforms = [
    { y: card1Y, scale: card1Scale, opacity: card1Opacity, rotateX: card1RotateX },
    { y: card2Y, scale: card2Scale, opacity: card2Opacity, rotateX: card2RotateX },
    { y: card3Y, scale: card3Scale, opacity: card3Opacity, rotateX: card3RotateX }
  ];

  return (
    <section ref={containerRef} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/50"></div>
      
      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <motion.div
          className="text-center space-y-6 mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-sora gradient-text-primary">
            Allied in 10 seconds
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            We combine cutting-edge technology with elegant design to build products that work.
          </p>
        </motion.div>

        {/* Stacked Cards Container */}
        <div className="relative h-[1200px] max-w-4xl mx-auto" style={{ perspective: '1200px' }}>
          {cards.map((card, index) => {
            const transforms = cardTransforms[index];

            return (
              <motion.div
                key={card.id}
                className="sticky top-24 w-full mb-8"
                style={{
                  y: transforms.y,
                  scale: transforms.scale,
                  opacity: transforms.opacity,
                  rotateX: transforms.rotateX,
                  zIndex: cards.length - index,
                  transformStyle: 'preserve-3d',
                  willChange: 'transform',
                }}
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  ease: [0.25, 0.1, 0.25, 1.0]
                }}
                viewport={{ once: true, margin: "-10%" }}
              >
                <div 
                  className={`relative h-96 rounded-3xl bg-gradient-to-br ${card.gradient} p-1 shadow-2xl overflow-hidden backdrop-blur-sm`}
                  style={{
                    filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.15))',
                    backfaceVisibility: 'hidden'
                  }}
                >
                  {/* Inner content container */}
                  <div className="relative h-full rounded-3xl bg-black/20 backdrop-blur-sm p-8 md:p-12 flex flex-col justify-between">
                    {/* Tag */}
                    <div className="flex justify-end">
                      <div className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/30 shadow-lg">
                        {card.tag}
                      </div>
                    </div>

                    {/* Main Content */}
                    <div className="space-y-8">
                      <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight font-sora">
                        {card.title}
                      </h3>
                    </div>

                    {/* Bottom gradient overlay for depth */}
                    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
                  </div>

                  {/* Animated background elements */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full filter blur-3xl opacity-60"></div>
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full filter blur-2xl opacity-40"></div>
                  
                  {/* Additional depth layers */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/10 via-transparent to-white/5 pointer-events-none"></div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
