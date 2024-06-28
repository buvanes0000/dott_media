// src/components/Blog.js

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS CSS

import mediagrowth from "../assets/mediagrwoth.jpg";
import website from "../assets/creativeweb.jpg";
import content from "../assets/content.jpg";

const BlogContainer = styled.div`
  padding: 60px 20px;
  background: #f0f0f0;
  text-align: center;

  @media (max-width: 768px) {
    padding: 40px 20px;
  }
`;

const BlogTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  font-family: 'Poppins', sans-serif;
  color: #333;
`;

const BlogGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const BlogCard = styled.div`
  background: #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 20px;
  margin: 10px;
  width: 350px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  text-align: left;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const BlogImage = styled.img`
  width: 100%;
  height: 18em;
  border-radius: 10px 10px 0 0;
`;

const BlogContent = styled.div`
  padding: 15px;
`;

const BlogTitleCard = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
  font-family: 'Poppins', sans-serif;
  color: #333;
`;

const BlogExcerpt = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  font-family: 'Poppins', sans-serif;
  color: #666;
`;

const BlogButton = styled(Link)`
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  background: #ff6b81;
  color: #fff;
  text-decoration: none;
  font-family: 'Poppins', sans-serif;
  transition: background 0.3s ease, transform 0.3s ease;
  margin-top: 3rem;

  &:hover {
    background: #ff4757;
    transform: translateY(-3px);
  }
`;

const Blog = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  // Example blog posts data
  const blogPosts = [
    {
      id: 1,
      title: 'Boost Your Social Media Presence',
      excerpt: 'Learn how to effectively boost your social media presence with these proven strategies.',
      image: mediagrowth, // Replace with your image paths
    },
    {
      id: 2,
      title: 'Top Web Design Trends in 2024',
      excerpt: 'Discover the latest web design trends that are dominating in 2024.',
      image: website,
    },
    {
      id: 3,
      title: 'Content Management Tips',
      excerpt: 'Get started with content management using these helpful tips for beginners.',
      image: content,
    },
  ];

  return (
    <BlogContainer>
      <BlogTitle>From Our Blog</BlogTitle>
      <BlogGrid>
        {blogPosts.map((post) => (
          <BlogCard key={post.id} data-aos="fade-up">
            <BlogImage src={post.image} alt={post.title} />
            <BlogContent>
              <BlogTitleCard>{post.title}</BlogTitleCard>
              <BlogExcerpt>{post.excerpt}</BlogExcerpt>
              <BlogButton to="/blog">Read More</BlogButton>
            </BlogContent>
          </BlogCard>
        ))}
      </BlogGrid>
    </BlogContainer>
  );
};

export default Blog;
