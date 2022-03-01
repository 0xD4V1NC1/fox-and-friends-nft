import React from 'react';
const Logo = ({formattedClassName}: {formattedClassName?: string}) => {
  return (
    <svg className={formattedClassName} xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="-29.1 -21.4 1338.1 986.9" fill="currentColor"
    >
      <path d="M448.5,0h0.4c3.4,5.9,7.3,11.4,10.5,17.4c16,28.9,28.8,60.8,53.1,84.1c13.4,13.2,29.9,23.3,47.8,29.3  c14,5.3,28.9,7.9,43.8,9.7c2.7-0.2,5.3-1.2,7.9-1.7c24.8-6.1,49.8-11.3,74.9-16c9-1.5,18-2.8,27.1-3.3c17.6-0.2,35.2,1.9,52.4,5.3  c33.7,6.8,66.8,16.9,98.7,29.9c15.1-9.7,30.5-18.9,46.4-27.1c13.2-6.9,26.8-12.8,40.3-19c10.2-4,20.4-8.1,30.7-12.1  c15.4-5.2,30.8-10.5,46.6-14.7c14.8-4.5,30-7.6,45-11.1c11-2.4,22.3-4,33.3-6.6c7.9-6.6,15.1-14.1,23.4-20.3  c17.1-13.6,36.4-24.7,57.4-31.1c7.3,14.9,11.2,31.5,10.9,48.2c0.2,20.8-5.1,41.1-7.6,61.6c7.1,7.8,14.1,15.6,19.7,24.6  c5.9,9.1,10.6,19.1,11.9,29.9c1.5,10-1,20.3-6.2,28.8c-10.4,16.5-27.9,26.7-45.2,34.8c-6.1,3.1-12.8,5-19,8  c5.8,8.5,6.9,19.3,5.3,29.2c-3.7,18.9-14.1,35.4-22.1,52.7c-0.8,1.3-1.1,3.1-2.8,3.6c-0.7-9.4,1.1-18.7,1.8-28.1  c1.4-11.1-0.4-23.3-8.2-31.8c-11.8,4.5-23.8,8.1-35.4,13c-11.4,4.6-23,9.1-33.7,15.4c-19.9,12.5-34.8,31.7-45.3,52.5  c-7.2,13.9-12.6,28.7-16.5,43.8c-2.8,11.7-5.3,23.6-4.6,35.7c0.1,2.6,0.8,5.4,2.7,7.3c20.3-14.7,44-23.7,68-30.5  c21.4-6,43-11.5,63.9-19.2c20.3-7.8,39.7-18.9,55.3-34.3c1.2-1.3,2.9-2.3,3.7-4c2.7-11.4,4.1-23.3,3.2-35c-1.5-19.3-6.7-38-9.6-57  c17.4,10.7,27.2,29.8,34.1,48.4c5,13.3,8.2,27.1,11.2,40.9c7.7-5.1,17.2-8.1,26.5-6.8c9.8,1.2,18.1,8.1,23.1,16.3  c4.4,7.6,6.5,16.6,6.8,25.4v7.7c-0.8,15.5-4.8,30.8-9.7,45.4c-1.2,4.2-4.3,8.2-3.4,12.7c1.5,10.1,2.7,20.6-0.6,30.5  c-1.8,5.1-3.8,10.5-7.6,14.5c-0.8-4.2-1.7-8.7-4.9-11.8c-3-3.3-7.3-5-11.6-5.9c6.3,19,2.3,40.8-9.6,56.7c-0.7-6.5-2.8-12.9-6.9-18  c-4.9-6.3-11.5-10.8-18.3-14.7c3.4,17-3.2,34.1-11.5,48.7c-2,3.4-3.9,7-6.4,10.1c-1.7-8.4-2-16.9-4.1-25.2  c-1.7-5.8-4.7-11.4-9.5-15.1c-24.5,14.2-50.1,27-72.2,44.8c-7.9,6.8-15.6,14.3-20.1,23.9c-3.9,7.8-4.5,17.4-0.9,25.4  c8.6,20.8,17.7,41.3,26,62.2c13.5,34.1,24.1,70.3,24.4,107.2c-10.4,12.5-21.1,24.7-31.8,37c-32,36.7-63.7,73.6-97.9,108.2  c-6,5.2-11.2,12.8-19.8,13.4h-8.5c-15.6-1.3-30.9-4.3-46.2-7.5c-41.8-9.2-82.8-21.5-123.9-33.3c-46.5-14.1-92.9-28.6-139-44  c-8.3-2.7-16.6-5.7-25-8.1c-77.7-15.9-155.3-31.8-233-47.8c-5.3-1.5-10.7,0.3-16.1,0c-9.1-0.2-18.3,0.6-27.4-0.5  c-33.8-0.2-67.8-4.6-99.9-15.4c-22-7.6-43-18.4-61.6-32.5c-5.7-3.8-10.5-8.8-16.1-12.7c15.3,2.1,30.7,3.2,46.2,3  c5.6-0.8,11.4-0.5,17-1.1c33.5-3.2,66.5-10.7,98.5-20.9c-13.2,1.8-26.3,5.3-39.7,5.4c-5.6,0.9-11.3,0.6-16.9,0.8  c-41.8-0.6-83.3-11.6-120.4-31c-12.4-6-23.9-13.7-35.6-20.9c23.9,4,47.8,8.4,72.1,9.2c14,1.7,28.1,0.2,42-1.5  c15.3-2.5,30.6-6.7,43.9-14.8c-13.6,2.2-27.3,3.3-41.1,3c-48.7-1.8-96.2-16.1-140.6-35.8c-33.1-14.7-64.8-32.8-94.3-53.7  c-5.9-4-11.4-8.8-17.4-12.7c19.1,3.1,38.2,5.8,57.3,8.9c5.4,0.7,10.8,1.8,16.3,1.6c0.1,0.2,0.3,0.6,0.4,0.8  c7.2,0.3,14.3,1.6,21.4,2.3c4.6,1.1,9.3,0.1,13.9,1.3c6.7,0.7,13.5-0.1,20.1,1.1c6.7,0.1,13.4,0.2,20.1,0c6.6-1.4,13.4-0.1,19.9-1.6  c2.3-0.3,4.7-0.2,7-0.4c5-1,10-1.7,15-2.6c22-4.2,43.4-12.1,62.3-24.2c-9.3,1.1-18.1,4.7-27.4,6.1c-10.3,1.6-20.6,3.9-31.2,4.2  c-9.2,1.5-18.6,0.6-27.9,0.8c-8-1-16-1.3-23.9-3.1c-20.6-3.6-40.3-11.7-58.2-22.2c-28.6-16.7-52.5-40-78.8-60  c13.2,5.3,26.9,9.2,41,11.2c5.9,1.6,12,0.9,17.9,2.1c17.1,0.5,34.2,0.5,51.2-1.9c39.2-5.3,77.1-17.3,114.1-30.8  c14.6-4.7,28.6-11.4,43.3-15.7c-5.9-2.4-12.4-0.5-18.4-1.9c-24.2-2.5-47.1-13-66.1-28.1c-1.8-1.5-4-2.6-5.2-4.7  c27.6-12,54.3-27.3,75.9-48.5c14.4-14,26.1-30.8,33.4-49.6c8.2-20.5,10.6-42.8,9.3-64.7c-2.9-4.9-6.8-9.4-9.2-14.6  c-9.8-17.1-14.5-36.5-16.7-55.9c-1.6-9.9-0.7-20-1.7-30c1-11.2,0.2-22.6,1.7-33.8c1.9-27.1,5.4-53.9,6.5-81c0.5,0.5,1,0.9,1.4,1.4  C307,67.1,327.3,97.9,352,125c20.9,22.6,45.4,42.1,73.1,55.7c8.4,4.1,16.9,8.3,25.9,11.1c-19.7-29.1-26.5-65.2-25.2-99.8  c1.6-30.3,8.9-60.3,21.5-88C447.7,2.7,448.5,1.4,448.5,0z"/>
    </svg>
  );
};
export default Logo;