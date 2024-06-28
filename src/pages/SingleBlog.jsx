// src/components/SingleBlog.js

import React from 'react';
import styled from 'styled-components';
import mediagrowth from "../assets/mediagrwoth.jpg"; // Example image for blog 1
import webtrends from "../assets/creativeweb.jpg"; // Example image for blog 2
import contentmanagement from "../assets/content.jpg"; // Example image for blog 3

const BlogContainer = styled.div`
  padding: 60px 20px;
  background: #f0f0f0;
  text-align: center;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const BlogTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  font-family: 'Poppins', sans-serif;
  color: #333;
`;

const BlogImage = styled.img`
  width: 100%;
  max-width: 800px;
  height: auto;
  margin: 20px 0;
  border-radius: 10px;
`;

const BlogContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: left;
  font-family: 'Poppins', sans-serif;
  color: #666;
  line-height: 1.6;
`;

const Paragraph = styled.p`
  margin-bottom: 1.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  margin-top: 40px;
  margin-bottom: 20px;
  font-family: 'Poppins', sans-serif;
  color: #333;
`;

const SingleBlog = () => {
  return (
    <BlogContainer>
      <BlogTitle>Our Blog</BlogTitle>

      <SectionTitle>How to Boost Your Social Media Presence</SectionTitle>
      <BlogImage src={mediagrowth} alt="How to Boost Your Social Media Presence" />
      <BlogContent>
        <Paragraph>
          Social media presence is crucial for businesses in today's digital age. With the right strategies, you can
          effectively reach your target audience and grow your brand.
        </Paragraph>
        <Paragraph>
          In this article, we will explore proven strategies to boost your social media presence, including optimizing
          your profiles, creating engaging content, leveraging hashtags, and more.
        </Paragraph>
        <Paragraph>
          Social media platforms like Facebook, Instagram, Twitter, and LinkedIn offer unique opportunities to connect
          with your audience. By understanding the strengths of each platform and tailoring your approach, you can
          maximize your reach and engagement.
        </Paragraph>
        <Paragraph>
          Additionally, we will discuss the importance of analyzing your social media performance and adjusting your
          strategies based on insights and data.
        </Paragraph>
        <Paragraph>
          By the end of this guide, you will have a comprehensive understanding of how to enhance your social media
          presence and drive meaningful results for your business.
        </Paragraph>
      </BlogContent>

      <SectionTitle>Top Web Design Trends in 2024</SectionTitle>
      <BlogImage src={webtrends} alt="Top Web Design Trends in 2024" />
      <BlogContent>
        <Paragraph>
          Web design trends are constantly evolving, and 2024 is no different. This year, we are seeing a mix of
          innovative new ideas and the resurgence of some classic design elements.
        </Paragraph>
        <Paragraph>
          One major trend is the use of minimalistic designs with clean lines and ample white space. This approach helps
          create a modern, professional look that is easy on the eyes and enhances user experience.
        </Paragraph>
        <Paragraph>
          Another trend gaining traction is the use of bold typography. Large, eye-catching fonts can help convey your
          message more effectively and add a unique personality to your website.
        </Paragraph>
        <Paragraph>
          Additionally, dark mode has become increasingly popular. This feature not only reduces eye strain but also
          gives your website a sleek, modern aesthetic.
        </Paragraph>
        <Paragraph>
          Finally, incorporating micro-interactions and animations can make your website more engaging and interactive,
          providing a more immersive user experience.
        </Paragraph>
      </BlogContent>

      <SectionTitle>Content Management Tips for Beginners</SectionTitle>
      <BlogImage src={contentmanagement} alt="Content Management Tips for Beginners" />
      <BlogContent>
        <Paragraph>
          Effective content management is essential for maintaining a successful online presence. Whether you're
          managing a blog, a corporate website, or a social media account, these tips will help you get started.
        </Paragraph>
        <Paragraph>
          First, it's important to create a content calendar. This will help you plan your posts in advance and ensure a
          consistent flow of content.
        </Paragraph>
        <Paragraph>
          Next, focus on creating high-quality content. This means investing time in researching your topics,
          proofreading your posts, and using visually appealing images and graphics.
        </Paragraph>
        <Paragraph>
          Additionally, it's crucial to analyze your content's performance. Use analytics tools to track metrics such as
          engagement, reach, and conversion rates. This data will help you understand what works and what doesn't, so
          you can refine your strategy accordingly.
        </Paragraph>
        <Paragraph>
          Finally, don't be afraid to experiment with different types of content. From blog posts and infographics to
          videos and podcasts, variety can keep your audience engaged and attract new followers.
        </Paragraph>
      </BlogContent>
    </BlogContainer>
  );
};

export default SingleBlog;
