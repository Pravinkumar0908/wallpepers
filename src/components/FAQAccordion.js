import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaQuestionCircle } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const faqData = [
  {
    question: "What file formats are supported?",
    answer: "We support a wide range of formats including JPEG, PNG, SVG for images, and MP4, MOV, AVI for videos."
  },
  {
    question: "How do I cancel my subscription?",
    answer: "You can cancel your subscription anytime from your account settings. Your access will remain active until the end of your billing period."
  },
  {
    question: "Are the images and videos royalty-free?",
    answer: "Yes, all content on our platform is royalty-free for both personal and commercial use."
  },
  {
    question: "Can I use the content for commercial projects?",
    answer: "Absolutely! Our license allows for commercial use in most scenarios. Please check our license agreement for specific details."
  }
];

const FAQ = () => {
  const faqItemsRef = useRef([]);

  useEffect(() => {
    faqItemsRef.current.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: item,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <FAQSection id="faq">
      <SectionTitle>Frequently Asked Questions</SectionTitle>
      <FAQGrid>
        {faqData.map((faq, index) => (
          <FAQItem key={index} ref={(el) => (faqItemsRef.current[index] = el)}>
            <FAQQuestion>
              <FaQuestionCircle /> {faq.question}
            </FAQQuestion>
            <FAQAnswer>{faq.answer}</FAQAnswer>
          </FAQItem>
        ))}
      </FAQGrid>
    </FAQSection>
  );
};

const FAQSection = styled.section`
  padding: 100px 20px;
  background-color: #f8f9fa;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 50px;
  color: #333;
`;

const FAQGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const FAQItem = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const FAQQuestion = styled.h3`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  color: #6e8efb;
`;

const FAQAnswer = styled.p`
  color: #666;
`;

export default FAQ;