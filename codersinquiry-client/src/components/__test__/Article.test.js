import React from 'react';
import { render } from '@testing-library/react';
import AskQuestion from '../AskQuestion/AskQuestion';
import Banner from '../Banner/Banner';
import Main from '../Home/Main/Main';
import "@testing-library/jest-dom/extend-expect";



test("Question features render with text", () => {
   const {getByTestId} = render(<AskQuestion/>);
   const headerEl = getByTestId("question")
   expect(headerEl.textContent).toBe("Ask a Question")

})


test("Question features render with text", () => {
   const {getByTestId} = render(<Banner/>);
   const headerEl = getByTestId("banner")  
   expect(headerEl.textContent).toBe("তুমি যদি প্রোগ্রামিং-এ নতুন হয়ে থাকো কিংবা শুরু করার কথা ভাবছো কিংবা প্রোগ্রামিং করতে গিয়ে কোন সমস্যায় পড়ে মাথার চুল ছিঁড়ে ফেলার মতো অবস্থা হয় তাহলে এখনই আমাদের এই সাইটে প্রশ্ন করে ফেলো। হয়তো তোমারই কোন সহপাঠী, বন্ধু কিংবা বড় ভাই তোমার প্রশ্নের উত্তর দেয়ার জন্য প্রস্তুত হয়ে বসে আছে।")

})


test("Question features render with text", () => {
   const {getByTestId} = render(<Main/>);
   const headerEl = getByTestId("main") 
   expect(headerEl.textContent).toBe("Ask Question")

})








