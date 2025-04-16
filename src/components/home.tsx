import React, { useState } from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import LegalTopicsGrid from "./LegalTopicsGrid";
import VoiceButton from "./VoiceButton";
import DemoSection from "./DemoSection";
import TeamSection from "./TeamSection";
import AthenaChatWidget from "./AthenaChatWidget";

const Home = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleAskQuestion = () => {
    setIsChatOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <HeroSection onAskQuestion={handleAskQuestion} />
        <LegalTopicsGrid />
        <DemoSection videoUrl="https://www.youtube.com/watch?v=9kKKSNqZzRs" />
        <TeamSection />
      </main>
      <AthenaChatWidget />
    </div>
  );
};

export default Home;
