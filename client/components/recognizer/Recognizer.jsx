import React, { useState, useEffect } from 'react';
// import faceapi from '/home/msvyk/HR2201/MVP/MVP/faceAPI/face-api.min.js';
import { Canvas } from '../../styles/styles.js'
import styled from "styled-components";


const RecognizerDiv = styled.div`
  
`
export default function Recognizer () {
  // console.log('>>>>>>>>>>>>>>>',faceapi)


  const video = document.getElementById('video')

  // Promise.all([
  //   faceapi.nets.tinyFaceDetector.loadFromUri('/models'),
  //   faceapi.nets.faceLandmark68Net.loadFromUri('/models'),
  //   faceapi.nets.faceRecognitionNet.loadFromUri('/models'),
  //   faceapi.nets.faceExpressionNet.loadFromUri('/models')
  // ]).then(startVideo)

  // function startVideo() {
  //   navigator.getUserMedia(
  //     { video: {} },
  //     stream => video.srcObject = stream,
  //     err => console.error(err)
  //   )
  // }

  // video.addEventListener('play', () => {
  //   const canvas = faceapi.createCanvasFromMedia(video)
  //   document.body.append(canvas)
  //   const displaySize = { width: video.width, height: video.height }
  //   faceapi.matchDimensions(canvas, displaySize)
  //   setInterval(async () => {
  //     const detections = await faceapi.detectAllFaces(video, new faceapi.TinyFaceDetectorOptions()).withFaceLandmarks().withFaceExpressions()
  //     const resizedDetections = faceapi.resizeResults(detections, displaySize)
  //     canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height)
  //     faceapi.draw.drawDetections(canvas, resizedDetections)
  //     faceapi.draw.drawFaceLandmarks(canvas, resizedDetections)
  //     faceapi.draw.drawFaceExpressions(canvas, resizedDetections)
  //   }, 100)
  // })
  return (
    <div >
      <h1>RECOGNIZER</h1>
      <Canvas>
        <video id="video" width="720" height="560" autoPlay muted></video>
      </Canvas>


    </div>
  )
}

