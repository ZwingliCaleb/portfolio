import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardBody, CardFooter, Button, Chip } from "@nextui-org/react";

const articles = [
  {
    title: 'Getting Started with Kubernetes: A Beginner\'s Guide',
    description: 'Kubernetes can feel overwhelming at first. In this article, I break down core concepts — pods, services, deployments — with real examples to get you up and running fast.',
    tag: 'Cloud Native',
    link: 'https://medium.com/@calebzwingli/getting-started-with-kubernetes-a-beginners-guide-lessons-from-my-recent-kcna-certification-1921ef5cec95?postPublishedType=repub',
    date: '2026',
  },
  {
    title: 'Why Every Frontend Dev Should Learn Cloud Basics',
    description: 'As a frontend engineer who went through the AWS CCP and KCNA certifications, I share why understanding the cloud makes you a significantly better developer.',
    tag: 'Cloud & Career',
    link: 'https://medium.com/@calebzwingli',
    date: '2024',
  },
  {
    title: 'Building a Responsive Portfolio with React & Tailwind CSS',
    description: 'A step-by-step breakdown of how I built my personal portfolio site, the design choices I made, and the tools that made the process smoother.',
    tag: 'React',
    link: 'https://medium.com/@calebzwingli',
    date: '2023',
  },
];

const Blog = () => {
  const scrollVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };

  return (
    <section className="w-full py-20 bg-gradient-to-b from-gray-950 to-blue-950 text-white overflow-hidden">
      <motion.div
        className="max-w-screen-lg mx-auto px-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.2 } } }}
      >
        <motion.div variants={scrollVariants} className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-indigo-500">
            From the Blog
          </h2>
          <p className="text-gray-400 mt-4 text-lg">Thoughts on engineering, cloud, and career growth</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article, i) => (
            <motion.div key={i} variants={scrollVariants} className="flex">
              <Card className="rounded-2xl flex flex-col w-full bg-gray-900/60 backdrop-blur-md border border-gray-800 hover:border-[#f23f67]/50 shadow-xl hover:shadow-[0_0_25px_rgba(242,63,103,0.15)] transition-all duration-300 group">
                <CardHeader className="px-6 pt-6 pb-2 flex-col items-start gap-2">
                  <Chip size="sm" className="bg-[#f23f67]/20 text-[#f23f67] border-[#f23f67]/30 border">{article.tag}</Chip>
                  <h3 className="text-lg font-bold text-white leading-snug group-hover:text-[#f23f67] transition-colors">{article.title}</h3>
                </CardHeader>
                <CardBody className="px-6 py-3 flex-grow">
                  <p className="text-gray-400 text-sm leading-relaxed">{article.description}</p>
                </CardBody>
                <CardFooter className="px-6 pb-6 pt-2 border-t border-gray-800/50">
                  <Button
                    as="a"
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#f23f67]/10 text-[#f23f67] border border-[#f23f67]/30 group-hover:bg-[#f23f67] group-hover:text-white transition-all font-semibold"
                    radius="full"
                    size="sm"
                  >
                    Read on Medium →
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div variants={scrollVariants} className="text-center mt-10">
          <a
            href="https://medium.com/@calebzwingli"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#f23f67] text-sm font-semibold transition-colors"
          >
            View all articles on Medium →
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Blog;
