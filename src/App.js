import React from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import './App.css';
import theme from './theme';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import RegisterSuccededPage from './pages/auth/RegisterSuccededPage';
import OtpPage from './pages/auth/OtpPage';
import Oauth2RedirectPage from './pages/auth/Oauth2RedirectPage';
import HomePage from './pages/home/HomePage';
import ProtectedRoute from './ProtectedRoute';
import Layout from './components/layout/Layout';
import SelectCategoryPage from './pages/post/SelectCategoryPage';
import { DynamicDetailedPage } from './constant/Components';
import { categories } from './constant/Categories';
import LaunchSharePropertyPage from './pages/post/property/LaunchSharePropertyPage';
import LaunchRentPropertyPage from './pages/post/property/LaunchRentPropertyPage';
import LaunchTransactionPropertyPage from './pages/post/property/LaunchTransactionPropertyPage';
import LaunchJobSeekingPage from './pages/post/job/LaunchJobSeekingPage';
import LaunchRecruitmentPage from './pages/post/job/LaunchRecruitmentPage';
import LaunchTutoringPage from './pages/post/job/LaunchTutoringPage';
import LaunchCarTransactionPage from './pages/post/transaction/LaunchCarTransactionPage';
import LaunchEtcTransactionPage from './pages/post/transaction/LaunchEtcTransactionPage';
import LaunchNecessitiesTransactionPage from './pages/post/transaction/LaunchNecessitiesTransactionPage';
import LaunchProductRentTransactionPage from './pages/post/transaction/LaunchProductRentTransactionPage';

const normalize = (str) => {
  if (str === "레스토랑(카페,펍)") {
    return "레스토랑";
  }
  return str.toLowerCase().replace(/\s+/g, '-');
};

const normalizedCategories = Object.keys(categories).reduce((acc, category) => {
  acc[normalize(category)] = categories[category].map((subCategory) => normalize(subCategory));
  return acc;
}, {});

const validateCategory = (category, subCategory) => {
  return normalizedCategories[category]?.includes(subCategory);
};

const RouteValidator = ({ category, componentMap }) => {
  const { subCategory } = useParams();
  const normalizedCategory = normalize(category);
  const normalizedSubCategory = normalize(subCategory);

  if (!validateCategory(normalizedCategory, normalizedSubCategory)) {
    return <div>Page not found</div>;
  }

  const Component = componentMap[normalizedCategory]?.[normalizedSubCategory];
  if (!Component) {
    return <div>Page not found</div>;
  }

  return <Component />;
};

function App() {
  const generateDynamicRoutes = () => {
    return Object.entries(categories).flatMap(([category, subCategories]) =>
      subCategories.map((subCategory) => (
        <Route
          key={`launch-${normalize(category)}-${normalize(subCategory)}`}
          path={`launch/${normalize(category)}/:subCategory`}
          element={
            <RouteValidator
              category={category}
              componentMap={{
                부동산: {
                  쉐어: LaunchSharePropertyPage,
                  렌트: LaunchRentPropertyPage,
                  매매: LaunchTransactionPropertyPage,
                },
                구인구직: {
                  구인: LaunchRecruitmentPage,
                  구직: LaunchJobSeekingPage,
                  과외: LaunchTutoringPage,
                },
                사고팔기: {
                  자동차: LaunchCarTransactionPage,
                  생활용품: LaunchNecessitiesTransactionPage,
                  기타: LaunchEtcTransactionPage,
                  대여: LaunchProductRentTransactionPage
                }
              }}
            />
          }
        />
      ))
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="register/succeeded" element={<RegisterSuccededPage />} />
          <Route path="oauth2/redirect" element={<Oauth2RedirectPage />} />
          <Route
            path="otp"
            element={
              <ProtectedRoute requiresAuth>
                <OtpPage />
              </ProtectedRoute>
            }
          />

          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="home" element={<HomePage />} />
            <Route path="launch" element={<SelectCategoryPage />} />
            <Route path=":category/:formattedTitle/details" element={<DynamicDetailedPage />} />

            {generateDynamicRoutes()}
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;