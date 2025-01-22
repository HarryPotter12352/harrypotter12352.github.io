import React from 'react';
import styled from 'styled-components';

const BlogsContainer = styled.section`
    background-color: black;
    color: white;
    font-family: 'Press Start 2P', cursive;
    margin-top: 200px;
`;

const SectionTitle = styled.h2`
    font-size: 3rem;
    text-align: center;
    margin-bottom: 20px;
    text-shadow: 2px 2px #ff0000, 4px 4px #00ff00, 6px 6px #0000ff;
`;

const BlogsList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
`;

const BlogCard = styled.div`
    background: #222;
    border: 3px solid #fff;
    border-radius: 10px;
    padding: 20px;
    width: 100%;
    max-width: 800px;
    box-shadow: 0 0 10px #ff0000;
    transition: transform 0.3s, box-shadow 0.3s;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    &:hover {
        transform: scale(1.05);
        box-shadow: 0 0 20px #00ff99;
    }
`;

const BlogTitle = styled.h3`
    font-size: 1.25rem;
    margin: 0;
    text-shadow: 1px 1px #ff0000;
`;

const BlogDetails = styled.p`
    font-size: 1rem;
    margin: 5px 0;
`;

const Link = styled.a`
    color: #00ff99;
    text-decoration: none;
    font-weight: bold;
    
    &:hover {
        text-decoration: underline;
    }
`;

const BlogsSection = () => {
    return (
        <BlogsContainer id="blogs">
            <SectionTitle>Blogs</SectionTitle>
            <BlogsList>
                <BlogCard>
                    <div>
                        <BlogTitle>
                            <Link href="/blognewyear" target="_blank" rel="noopener noreferrer">
                                thoguhts about the new year
                            </Link>
                        </BlogTitle>
                        <BlogDetails>
                            Author: Avi Damle
                        </BlogDetails>
                        <BlogDetails>
                            Category: Thoughts
                        </BlogDetails>
                        <BlogDetails>
                            Published: January 2025
                        </BlogDetails>
                    </div>
                </BlogCard>
            </BlogsList>
        </BlogsContainer>
    );
};

export default BlogsSection;