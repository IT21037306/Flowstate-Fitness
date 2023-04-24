import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './styles/index.css'
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import globalTheme from './theme';
// import { setMode } from './state';
import AdminLayout from './pages/AdminInterface/AdminLayout';
import GridPage from './pages/AdminInterface/GridPage';
import Members from './pages/UserManagement/Members';
import NotFound from './pages/NotFound';
import Main from './pages/TrainerManagement/main'
import Login from './pages/UserManagement/Login';
import UserLayout from './pages/UserInterface/UserLayout'
import SignUp from './pages/UserManagement/SignUp';
import DisplayUsers from './pages/UserManagement/DisplayUsers';
import PurchaseMembership from './pages/UserManagement/PurchaseMembership';
import DisplayMemberships from './pages/UserManagement/DisplayMembership';
import AddProducts from './pages/ProductManagement/AddProducts';
import UpdateProducts from './pages/ProductManagement/UpdateProducts';
import DeleteProducts from './pages/ProductManagement/DeleteProducts';
import AddReviews from './pages/CustomerRelationshipManagement/addReviews';
import UpdateReviews from './pages/CustomerRelationshipManagement/UpdateReviews';
//import DeleteReviews from './pages/CustomerRelationshipManagement/deleteReviews';
import Cart from './pages/ProductManagement/Cart';
import TrainerCalendar from './pages/PersonalTrainingManagement/TrainerCalendar';
import Attendance from './pages/PersonalTrainingManagement/Attendance';
import AddAttendance from './pages/PersonalTrainingManagement/AddAttendance';
import ProductScreen from './pages/ProductManagement/ProductScreen';
import ProductHandle from './pages/ProductManagement/ProductHandle';
import DisplayReviewsUser from './pages/CustomerRelationshipManagement/DisplayReviewsUser';
import DisplayReviewsAdmin from './pages/CustomerRelationshipManagement/DisplayReviewsAdmin';






function App() {

  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(globalTheme(mode)), [mode]);

  return (
    <div className="App">
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<AdminLayout />}>
              <Route path="/" element={<Navigate to="/admin/dashboard" />} />
              <Route path="/admin/dashboard" element={<GridPage />} />
              <Route path="/admin/members" element={<DisplayUsers />} />
              <Route path="/admin/users" element={<DisplayUsers />} />
              <Route path="/admin/membership" element={<DisplayMemberships />} />
              <Route path="/admin/products" element={<ProductHandle/>}/>
              <Route path="/admin/addProducts" element={<AddProducts/>}/> 
              <Route path="/admin/updateProducts" element={<UpdateProducts/>}/>
              <Route path="/admin/deleteProducts" element={<DeleteProducts/>}/>
              <Route path="/admin/schedule" element={<TrainerCalendar/>}/>
              <Route path="/admin/attendance" element={<Attendance/>}/>
              <Route path="/admin/addAttendance" element={<AddAttendance/>}/>
              <Route path="/admin/feedback" element={<DisplayReviewsAdmin/>}/>


             

              <Route path="/button" element={<Main />} />
            </Route>

            <Route element={<UserLayout />}>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/user/membership" element={<PurchaseMembership />} />
              <Route path="/user/addReviews" element={<AddReviews/>}/>
              <Route path="/user/updateReviews" element={<UpdateReviews/>}/>
              {/* <Route path="/user/deleteReviews" element={<DeleteReviews/>}/> */}
              <Route path="/user/productScreen" element={<ProductScreen/>}/>
              <Route path="/user/cart" element={<Cart/>} />
              <Route path="/user/displayReviewUser"element={<DisplayReviewsUser/>}/>
             

            </Route>
            <Route path="*" element={<NotFound />} />
            <Route path="/members" element={ <Members /> } />
          </Routes>
        </ThemeProvider>
      </Router>

      {/* <Stack direction="row">
            <SideNav />
            <Layout>
              <Header />
                <Content>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <ContentBox backgroundColor={theme.palette.background.alt}></ContentBox>
                </Grid>
                <Grid item xs={12} md={6}>
                  <ContentBox backgroundColor={theme.palette.background.alt}></ContentBox>
                </Grid>
                <Grid item xs={6} md={4}>
                  <ContentBox backgroundColor={theme.palette.background.alt}></ContentBox>
                </Grid>
                <Grid item xs={6} md={4}>
                  <ContentBox backgroundColor={theme.palette.background.alt}></ContentBox>
                </Grid>
                <Grid item xs={6} md={4}>
                  <ContentBox backgroundColor={theme.palette.background.alt}></ContentBox>
                </Grid>
                <Grid item xs={12} md={6}>
                  <ContentBox backgroundColor={theme.palette.background.alt}></ContentBox>
                </Grid>
                <Grid item xs={12} md={6}>
                  <ContentBox backgroundColor={theme.palette.background.alt}></ContentBox>
                </Grid>
                <Grid item xs={6} md={4}>
                  <ContentBox backgroundColor={theme.palette.background.alt}></ContentBox>
                </Grid>
                <Grid item xs={6} md={4}>
                  <ContentBox backgroundColor={theme.palette.background.alt}></ContentBox>
                </Grid>
                <Grid item xs={6} md={4}>
                  <ContentBox backgroundColor={theme.palette.background.alt}></ContentBox>
                </Grid>
                <Grid item xs={12} md={6}>
                  <ContentBox backgroundColor={theme.palette.background.alt}></ContentBox>
                </Grid>
                <Grid item xs={12} md={6}>
                  <ContentBox backgroundColor={theme.palette.background.alt}></ContentBox>
                </Grid>
                <Grid item xs={6} md={4}>
                  <ContentBox backgroundColor={theme.palette.background.alt}></ContentBox>
                </Grid>
                <Grid item xs={6} md={4}>
                  <ContentBox backgroundColor={theme.palette.background.alt}></ContentBox>
                </Grid>
                <Grid item xs={6} md={4}>
                  <ContentBox backgroundColor={theme.palette.background.alt}></ContentBox>
                </Grid>
              </Grid>
              </Content>
            </Layout>
          </Stack> */}
    </div>
  );
}

export default App;
