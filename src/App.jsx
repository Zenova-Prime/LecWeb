// src/App.js
import React, { useState } from "react";
import "./apple.css";
// import CookieConsent from "./components/CookieConsent";
import axios from "axios";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Popup from "./components/Popup";
import SubjectSelector from "./components/SubjectSelector";
import TeacherSelector from "./components/TeacherSelector";
import ChapterSelector from "./components/ChapterSelector";
import LectureLink from "./components/LectureLink";
import Footer from "./components/Footer";

const App = () => {
  const subjects = ["physics", "maths", "organic", "inorganic", "physical"];

  const [selectedSubject, setSelectedSubject] = useState(null);
  const [teachers, setTeachers] = useState([]);
  const [selectedTeacher, setSelectedTeacher] = useState(null);
  const [chapters, setChapters] = useState([]);
  const [selectedChapter, setSelectedChapter] = useState(null);
  const [lectureLink, setLectureLink] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchTeachers = async (subject) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://zenova-api-green.vercel.app/teachers?subject=${subject}`
      );
      setTeachers(response.data.teachers);
    } catch (error) {
      console.error("Error fetching teachers:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchChapters = async (subject, teacher) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://zenova-api-green.vercel.app/chapters?subject=${subject}&teacher=${teacher}`
      );
      setChapters(response.data.chapters);
    } catch (error) {
      console.error("Error fetching chapters:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchLectureLink = async (subject, teacher, chapter) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://zenova-api-green.vercel.app/lecture?subject=${subject}&teacher=${teacher}&ch=${chapter}`
      );
      setLectureLink(response.data.link);
    } catch (error) {
      console.error("Error fetching lecture link:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-900 text-white">
      <Header />
      <Introduction />
      <Popup />

      {/* Loading Indicator */}
      {loading && <div className="text-lg mb-4">Loading...</div>}

      {/* Subject Selection */}
      {!selectedSubject && !loading && (
        <SubjectSelector
          subjects={subjects}
          onSelect={(subject) => {
            setSelectedSubject(subject);
            fetchTeachers(subject);
          }}
        />
      )}

      {/* Teacher Selection */}
      {selectedSubject && !selectedTeacher && !loading && (
        <TeacherSelector
          teachers={teachers}
          onSelect={(teacher) => {
            setSelectedTeacher(teacher);
            fetchChapters(selectedSubject, teacher);
          }}
          onBack={() => {
            setSelectedSubject(null);
            setTeachers([]);
          }}
        />
      )}

      {/* Chapter Selection */}
      {selectedTeacher && !selectedChapter && !loading && (
        <ChapterSelector
          chapters={chapters}
          onSelect={(chapter) => {
            setSelectedChapter(chapter);
            fetchLectureLink(selectedSubject, selectedTeacher, chapter);
          }}
          onBack={() => {
            setSelectedTeacher(null);
            setChapters([]);
          }}
        />
      )}

      {/* Lecture Link */}
      {lectureLink && !loading && (
        <LectureLink
          link={lectureLink}
          onBack={() => {
            setSelectedChapter(null);
            setLectureLink(null);
          }}
        />
      )}

      {/* Telegram Link */}
      <a
        href="https://t.me/ZenovaPrime"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-0 right-0 mb-4 mr-4"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg"
          alt="Telegram Logo"
          className="w-12 h-12"
        />
      </a>
      {/* Contact Us Section */}
      <Footer />
      {/* <CookieConsent /> */}
    </div>
  );
};

export default App;
