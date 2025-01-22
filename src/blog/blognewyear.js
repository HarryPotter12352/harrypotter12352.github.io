import React from 'react';
import styled from 'styled-components';
import Navbar from "../Navbar";

const BlogContainer = styled.section`
    background-color: black;
    color: white;
    font-family: 'Press Start 2P', cursive;
    min-height: 50vh;
`

const SectionTitle = styled.h2`
    font-size: 3rem;
    text-align: center;
    margin-bottom: 40px;
    margin-top: 90px;
    text-shadow: 2px 2px #ff0000, 4px 4px #00ff00, 6px 6px #0000ff;
`

const BlogText = styled.p`
    text-align: center;
    font-size: 30px;
    margin: 20px 80px 0 80px;
    line-height: 1.4;
    margin-bottom: 30px;
    font-family: 'Roboto', sans-serif;
`

const BlogNewYear = () => {

    return (
        <>
        <Navbar/>
        <BlogContainer>
            <SectionTitle>thoughts about the new year</SectionTitle>
            <BlogText>  
                <center>-Avi, January 2025</center>
                So 2025 is here. I’ve been thinking quite a lot about how this year might bring great change for me. Might, in fact, is somewhat untrue, it will bring great change for me! I’ll be changing schools, and the paradigm of education. After boards end on March 18th, I’ll be shifting to JEE. (After a 15 day “summer” vacation, lol.)
                <br /><br />
                Since I’ve totally organically arrived at the topic of JEE, I figure I should rant about it a little bit. Of course, I haven’t taken the JEE, gone through the process, or even begun coaching. So whatever I say should be taken with a grain of salt. I’ve been thinking about all the problems my seniors cite about it, and to be honest, I don’t think enough credit is given to just how straightforward JEE is. Of course, there are still problems, such as reservation. I’ll try to keep all of that away from this blog post.
                <br /><br />
                I think it’s unfair to compare JEE with the admissions processes of universities outside India. Take MIT, for example. It’s a well-known university, and many people apply to it. For the class of 2028, there were 28,382 applicants. I would assume it is a difficult job to read all those applications, and all the essays, and everything else. That’s all well and good. If we are to trust Careers360, the number of candidates who took the 2024 Mains exam in Session 1 was 1,170,048. Yeah, over a million! That’s ~41 times the number of candidates.
                <br /><br />
                I’d like to share an anecdote. On a public forum, I came across someone saying something along the lines of “why do I have to write an essay for a college application? Its so annoying.” And their viewpoint is fair enough, right? Writing essays can be annoying. (again, I’m just trying to yap, I know I’m only a sophomore, I’m just writing whatever I’m thinking. My opinions can just be garbage. In that case, sorry not sorry.) But then again, why not sign up for an exam where you will be judged objectively for admission to the top universities? Oh, it’s too general and too many people sign up? Let’s make the questions super esoteric and difficult! Oh, wait-
                <br /><br />
                Yeah, I guess that’s somewhat the problem with it. While I’m not going to talk about the specific history of India and the context in which the JEE was introduced, (1961 India was very different compared to today) I still think it’s fair enough to say that the JEE has its fair share of problems. But in the current context, it feels like the best that universities can do for undergraduate admissions.
                <br /><br />
                Anyway, that’s my piece about JEE. I think I should start talking about how my life is going to change now. For the school I currently go to, I leave at 7:30AM, and come back at ~4:15PM on normal days. My new school, which is really just coaching, I will leave at the same time, but come back around 6:30 or 7 PM. I know, right?! Pretty long. To be honest, I am looking forward to it. I’ll get to do those esoteric problems on a daily basis! (Although, I might enjoy some subjects more than others). Obviously, I’m not looking forward to being tired very often, but I suppose it just is what it is.
                <br /><br />
                I, too, plan on applying to universities outside India. And I will say, the culture that organically formed for that over time is rather toxic. Everybody thinks they need to do something to get in. (Obviously, you need to do <i>something</i>, but I mean something specific). I will admit, I also fell right in this grind at the beginning of the 9th grade. I figured I’d do every big competition there is, and life would be great. At the moment, I’m just studying for the physics olympiad, working on research, and a few other cool things, like web dev, and some programming, and a lot more studying lol. I will say, all this college grind nudged me towards a bunch of brilliant activities, be it research, olympiad, or something else. The problems are very fun, and it’s good fun to find more. I’ve also gotten really good at calculus and geometry by doing them. I don’t know where I’ll end up for university, but I just hope I’m able to enjoy my high school experience now. (Not that I didn’t enjoy the first 2 years).
                <br /><br />
                Since the first 2 years are coming to an end, I’d also like to talk a little bit about some things I want to do after boards (or pre-boards?)
                <br /><br />
                1. I want to start my own YouTube channel. Creating funny content about a cool topic has been on my bucket list for a long time. Maybe I’ll cover developments in high energy physics? The CMS, ALICE, CFD collaborations etc.. drop some really good findings fairly often. I was thinking about putting it on a blog, but thought a channel would work better.
                <br /><br />
                2. Learn a new language. I’ve been pretty on and off about learning Latin for a couple of years now, and I picked up a few phrases, but never really fully committed to it. I really want to change that, and just learn it.
                <br /><br />
                3. Just get good at olympiad. Fr tho, need to clutch up that physics olympiad and just do it.
                <br /><br />
                4. I want to finish a paper I’ve been trying to write for a long time. I feel it’s such a cool concept, but I’m having some technical difficulties that I think I can solve in the future? Regretfully, what with boards and everything, I don’t have the time to resolve everything at the moment.
                <br /><br />
                5. Get more back into web-dev! Apart from this website, I don’t really code many websites any more. I really like the pixart theme of this website. (although it would just be wrong to make the whole website in pixelated font, so I'll spare your eyes)
                <br /><br />
                6. Get more into systems programming. I tried making my own operating system once, took way too long, got as far as a file system, and got bored of it. In all fairness, ASM is a super fun language once you begin to understand it, but I just couldn’t parse the underlying theory back then.
                <br /><br />
                Wow, all this is going to take time. But I really hope I can do it, because some of it looks like way too fun to pass up on.
            </BlogText>
        </BlogContainer>
        </>
    )

}

export default BlogNewYear;