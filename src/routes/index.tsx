import * as React from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import AudioPlayer from "../components/audioPlayer";




const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AudioPlayer/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
